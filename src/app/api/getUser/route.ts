import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';


Connect();

export async function POST(req: NextRequest) {
    try {
       
        const cookieStore = cookies();
        const Token = cookieStore.get('token')?.value || "";
        const decodedToken = jwt.verify(Token, process.env.NEXT_PUBLIC_SECRET_KEY!);
        const { userid } = decodedToken as { userid: string };
        const user = await User.findOne({_id :userid})
        if(!user) {
            return NextResponse.json({message : "User Doesn't found" , status : 404});
        }
        
        return NextResponse.json({user , status : 200});
    } catch (error) {
        console.log("Internal Error")
        return NextResponse.json({message : "Internal Error"});
    }
}