import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from 'bcryptjs';



Connect();


export async function POST(req:NextRequest) {
    try {
        const reqBody = await req.json();
        const {token , email , confirmPassword} = reqBody;
        const user = await User.findOne({forgotPasswordToken : token});
        const salt = await bcrypt.genSalt(10);
        const hashPass = await bcrypt.hash(confirmPassword, salt);
        // console.log(user);
        if(!user) return NextResponse.json({message : "You are not verified" ,status : 400} );
        if(user.email === email){
            user.password = hashPass;
            user.forgotPasswordToken = undefined;
            user.forgotPasswordExpiry = undefined;
        }
        await user.save();
        return NextResponse.json({message : "Verified" , status : 200});
    } catch (error) {
        return NextResponse.json({message : "Not verified" , status: 400})
    }
}