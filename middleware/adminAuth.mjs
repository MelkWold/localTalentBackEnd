import User from "../models/usersSchema.mjs";

export default async function adminAuth(req,res,next) {
    // Get user ID
    const id = req.user.id;

    try  {
        // Get an a user from DB
        const user = await User.findById(id).select("isAdmin");

        // If no user is found, return error message
        if(!user) return res.status(400).json({ errors: [{ msg: "Invalid Credentials" }]});

        // If user is an admin allow access, else throw error message
        if(user.isAdmin) {
            next();
        } else {
            throw new Error ("Not allowed")
        }
    } catch(err) {
        console.error(err);
        res.status(403).json({ errors: { msg: err.message }})
    }
}