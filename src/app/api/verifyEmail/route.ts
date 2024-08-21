import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";



Connect();

export async function POST(req: NextRequest){
    try {
        const reqBody = await req.json();
        const {token} = reqBody;
        console.log(token);
        const user = await User.findOne({verifyToken : token} , {verifyTokenExpiry : Date.now() + 3600000});
        // console.log(user);
        if(!user) return NextResponse.json({message : "You are not verified" ,status : 400} );
        user.isVerified = true;
        user.verifyToken = undefined;
        user.verifyTokenExpiry = undefined;
        await user.save();
        return NextResponse.json({message : "Verified" , status : 200});
        // return NextResponse.json(user);
    
    } catch (error:any) {
        return NextResponse.json({message : "Not verified" , status: 400})
    }
}