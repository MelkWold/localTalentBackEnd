import express from "express";
import dotenv from 'dotenv';
import jwt from "jsonwebtoken";
import bcrypt from 'bcryptjs'
import User from '../models/usersSchema.mjs';
// N.B. "check" defines validation rules while "validationResult" collects validation errors
import { check, validationResult } from 'express-validator';

// config dotenv to load variables into process.env
dotenv.config();

// Set up/ Create a new express router instance
const loginRouter = express.Router();

// Define post route for registration
loginRouter.route('/')
    .get((req, res) => {
        res.send("Auth Test");
    })

    .post(
       [ 
        check('email', "Please provide valid email").isEmail(),
        check('password', "Please enter a password with 8 or more characters").isLength({ min: 8 }),
       ],

       // Route Handler
       async(req, res) => {

        // Collect any validation errors from the check() rules
        const errors = validationResult(req);

        // if errors is not emplty (i.e. if validation fails), return error
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }
        //Destructure the validated user input from the request body
        const { email, password } = req.body;

        // check if user with the same email exists in the database
        try {
            let user = await User.findOne({ email });
            // send error message if user exists
            if(!user) {
                return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }]})
            }

            // Check whether the given password match the one saved in db
            const passwordMatch = await bcrypt.compare(password, user.password);

            // Return error message if passwords do not match
            if(!passwordMatch){
                return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }]})
            }

            // Create JWT Payload
            const payload = {
              user: { id: user._id }
             }
        // Sign JWT Token
        jwt.sign(
            payload, // user data to encode
            process.env.jwtSecret, // secret key from .env
            { expiresIn: "36000s" }, 
            (err, token) => {
                if(err) throw err;
                res.status(201).json({ token })
            }
            );

        } catch (err) {
            console.error(err.message);
            res.status(500).json({ errors: [{ msg: "Server Error" }]})
        }
    }
    );

export default loginRouter;