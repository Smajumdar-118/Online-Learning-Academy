import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helper/mailer";




Connect();
export async function POST(req : NextRequest) {
    try {
        const reqBody = await  req.json();
        const {firstname, lastname , email , password} = reqBody;

        const user = await  User.findOne({email});
        if(user){
            return NextResponse.json({message : "Email Already registered. Please Login" , status : 500});
        }
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(password, salt);
        const createUser = new User({
            username : firstname + " " + lastname, 
            email,
            password : hashPass

        })
        const newUser = await createUser.save();
        await sendEmail({ email, emailType: "VERIFY", userId: newUser._id });
        return NextResponse.json({status : 200 , message : "Resgistered"});

    } catch (error) {
        return NextResponse.json({error});
    }
    

}