import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helper/mailer";
import Roadmap from '@/models/roadmapMode';


Connect();




export async function POST(req : NextRequest){
    try {
        const reqBody = await req.json();
        const {id} = reqBody
        const roadmaps = await Roadmap.findOne({id});
        return NextResponse.json(roadmaps);
    } catch (error) {
        console.error('Error fetching roadmaps:', error);
        return NextResponse.json(
        { success: false, message: 'Failed to fetch roadmaps.' },
        { status: 500 }
    );
    }
}
