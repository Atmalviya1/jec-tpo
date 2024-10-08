'use server'

import User from "../models/User.modal";
import dbConnect from "../dbConnect";

export async function createUser(user) {
    try {
        await dbConnect();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    } catch (error) {
        console.log(error);
    }   
}
