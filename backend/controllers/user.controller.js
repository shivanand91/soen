import userModel from '../models/user.model.js';
import userServices from "../services/user.service.js"
import { validationResult } from 'express-validator';



export const createUserController = async (req, res) => {
    
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const user = await userServices.createUser(req.body);
        const token = await user.generateJWT();
        res.status(201).json({ user, token });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
        
    }
}