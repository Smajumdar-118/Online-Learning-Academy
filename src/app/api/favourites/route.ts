import { NextRequest, NextResponse } from "next/server";
import {getID} from '@/helper/getid'
import axios from "axios";
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken'
import User from "@/models/userModel";


export async function POST(req: NextRequest){
    try {
        const cookieStore = cookies();
        const Token = (await cookieStore).get('token')?.value || "";
        const decodedToken = jwt.verify(Token, process.env.NEXT_PUBLIC_SECRET_KEY!);
        const { userid } = decodedToken as { userid: string };
        if(!userid) return NextResponse.json({messgage :"Couldn't found"} , {status : 405});
        // console.log(userid);
        const reqBody = await req.json();
        const { roadmapId } = reqBody;
        // console.log(roadmapId);
        const userRoadmap = await User.findById(userid);
        if (!userRoadmap) {
            return NextResponse.json({ message: "User not found" }, { status: 404 });
        }
        // console.log(userRoadmap);
        if (!userRoadmap.favourites.includes(roadmapId)) {
            userRoadmap.favourites.push(roadmapId);
            await userRoadmap.save();
        }
        return NextResponse.json({roadmapId}, {status : 201});
        
    } catch (error) {
        console.log("Internal Error");
        return NextResponse.json({messgage :"Internal Error"} , {status : 405});

    }
}