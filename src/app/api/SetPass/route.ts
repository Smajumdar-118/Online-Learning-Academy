import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";



Connect();


export async function POST(req:NextRequest) {
    try {
        const reqBody = await req.json();
        const {token,email,pass} = reqBody;
        // console.log(token);
        const user = await User.findOne({forgotPasswordToken : token});
        // console.log(user);
        if(!user) return NextResponse.json({message : "You are not verified" ,status : 400} );
        if(user.email === email){
            user.password = pass;
            user.forgotPasswordToken = undefined;
            user.forgotPasswordExpiry = undefined;
        }
        await user.save();
        return NextResponse.json({message : "Verified" , status : 200});
    } catch (error) {
        return NextResponse.json({message : "Not verified" , status: 400})
    }
}