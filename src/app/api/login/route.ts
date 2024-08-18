import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";



Connect();


export async function POST(req : NextRequest) {

    try {
        
    const reqBody = await req.json();
    const {email , password} = reqBody;

    const user = await  User.findOne({email});
    console.log(user);
    if(user){
       const isMatch = await  bcrypt.compare(password, user.password);
       if(isMatch){
        const payload = {
            userid : user._id
        }
        const token = jwt.sign(payload , process.env.NEXT_PUBLIC_SECRET_KEY! , { expiresIn: '1h' })
        const response = NextResponse.json({message : "Logged In successfull"});
        response.cookies.set("token" , token , {
            httpOnly : true
        });
        
        return response;
       }
    
    }
    
    return NextResponse.json({message : "You are Not registered" , status : 400});
        
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' });
    }

}