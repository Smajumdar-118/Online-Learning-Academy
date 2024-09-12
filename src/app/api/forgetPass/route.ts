import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helper/mailer";




Connect();


export async function POST(req:NextRequest) {
    try {
        
        const reqBody = await req.json();
        const {email} = reqBody;
        const user = await  User.findOne({email});
        if(!user) {
            return NextResponse.json({message : "No Email Found" , status : 404});
        }
        await sendEmail({ email, emailType: "RESET", userId: user._id });
        return NextResponse.json({status : 200 , message : "Email Sent"});

    } catch (error) {
        return NextResponse.json({error});
    }

}