import { Connect } from "@/dbConfig/dbConfig";
import { NextRequest, NextResponse } from "next/server";




Connect();

export async function GET(req : NextRequest) {
    try {
        const response = NextResponse.json({message : "Successfully Logged Out" , status : 200 });
        response.cookies.delete('token');
        return response;
    } catch (error) {
        return NextResponse.json({message : "Internal server Error"})
    }
}