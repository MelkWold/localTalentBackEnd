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
const registerRouter = express.Router();

// Define post route for registration
registerRouter
    .route('/')
    .post(
       [ 
        check('userName', "Name is required").not().isEmpty(),
        check('email', "Please provide valid email").isEmail(),
        check('password', "Please enter a password with 8 or more characters").isLength({ min: 8 }),
        check('role', "Role is required").not().isEmpty(),
        check('services', "Providers must provide at least one service").custom((value, { req }) => {
            if (req.body.role === "Provider") {
                return Array.isArray(value) && value.length > 0;
            }
            return true;
        })
        
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
        const { userName, email, password, role, services } = req.body;

        // check if user with the same email exists in the database
        try {
            let user = await User.findOne({ email });
            // send error message if user exists
            if(user) {
                return res.status(400).json({ errors: [{ msg: "User already exists" }]})
            }
            // If user email is not in db, register user as new User
            user = new User ({
                userName,
                email,
                password,
                role,
                services: role === "Provider" && services ? services : []
            });

            // Hash Password (generate a random salt after 10 rounds)
            const salt = await bcrypt.genSalt(10);

            // Replace plain-text password with the secure hash
            user.password = await bcrypt.hash(password, salt);

            // Save user in db
            await user.save();

            // Create JWT Payload
            const payload = { user: { id: user._id } };
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn:"36000s" });
            return res.status(201).json({
                token,
                user: {
                    id: user._id,
                    userName: user.userName,
                    email: user.email,
                    role:user.role,
                    phone: user.phone,
                    userAddress: user.userAddress,
                    services:user.services
                },
            });
            
        } catch (err) {
            console.error(err.message);
            res.status(500).json({ errors: [{ msg: "Server Error" }]})
        }
    });

export default registerRouter;