import mongoose from "mongoose";
import User from "@/models/userModel"; 
import { Connect } from "@/dbConfig/dbConfig"; 

const addFavouritesField = async () => {
    try {
        await Connect();
        await User.updateMany(
            { favourites: { $exists: false } }, 
            { $set: { favourites: [] } }
        );

        console.log("Favourites field added to all users.");
        mongoose.connection.close();
    } catch (error) {
        console.error("Error adding favourites field:", error);
        mongoose.connection.close();
    }
};

addFavouritesField();
