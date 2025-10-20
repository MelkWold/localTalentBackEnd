import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

// Load environment variables from .env into process.env
dotenv.config();

export default function auth (req, res, next) {
    // Extract token from the custom HTTP header (x-auth-token)
    const token = req.header('x-auth-token');

    // If there is no token, return a 401 status and error message and stop further execution
    if(!token) return res.status(401).json({ errors: [{ msg: "No Token found; Auth Denied!"}]});

    // If there is token, verify it using the secret key (process.env.jwtSecret)
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // add user information from the token payload to the req object
        req.user = decoded.user; 

        next();
    } catch(err) {
        console.error(err.message);
        res.status(401).json({ errors: [{ msg: "Token is not valid" }]})
    }
}