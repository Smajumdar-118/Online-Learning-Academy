import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/helper/mailer";
import Roadmap from '@/models/roadmapMode';


Connect();


export async function POST(req:NextRequest){
    try {
        const reqBody = await req.json();
        const roadmap = new Roadmap(reqBody);
        await roadmap.save();
        return NextResponse.json({roadmap},{status:201});
    } catch (error) {
        console.error('Error creating roadmap:', error);
        return NextResponse.json(
        { success: false, message: 'Failed to create roadmap.' },
        { status: 500 }
    );
    }
}

export async function GET(){
    try {
        const roadmaps = await Roadmap.find();
        return NextResponse.json({roadmaps});
    } catch (error) {
        console.error('Error fetching roadmaps:', error);
        return NextResponse.json(
        { success: false, message: 'Failed to fetch roadmaps.' },
        { status: 500 }
    );
    }
}


// Update Roadmap

export async function PUT(req: NextRequest) {
    try {
      const reqBody = await req.json(); 
  
      if ( !reqBody.id) {
        return NextResponse.json({
          success: false,
          message: 'ID, Title, and Description are required.',
        }, { status: 400 });
      }
  
      const roadmap = await Roadmap.findOneAndUpdate(
        { id: reqBody.id },  
        { 
          title: reqBody.title,
          description: reqBody.description,
          image: reqBody.image || '', 
          importantLinks: reqBody.importantLinks || [],  
          updatedAt: new Date(), 
          category: reqBody.category || '', 
          isPublished: reqBody.isPublished || false, 
        }, 
        { new: true }  
      );
  
      if (!roadmap) {
        return NextResponse.json({
          success: false,
          message: 'Roadmap with the provided ID not found.',
        }, { status: 404 });
      }
  
      return NextResponse.json({
        success: true,
        roadmap,
      }, { status: 200 });
    } catch (error) {
      console.error('Error updating roadmap:', error);
      return NextResponse.json({
        success: false,
        message: 'Failed to update roadmap.',
      }, { status: 500 });
    }
  }




  export async function DELETE(req: NextRequest) {
    try {
      const reqBody = await req.json();
  
      if (!reqBody.id) {
        return NextResponse.json({
          success: false,
          message: 'ID is required.',
        }, { status: 400 });
      }
  
      const deletedRoadmap = await Roadmap.findOneAndDelete({ id: reqBody.id });
  
      if (!deletedRoadmap) {
        return NextResponse.json({
          success: false,
          message: 'Roadmap with the provided ID not found.',
        }, { status: 404 });
      }
  
      return NextResponse.json({
        success: true,
        message: 'Roadmap deleted successfully.',
        deletedRoadmap,
      }, { status: 200 });
    } catch (error) {
      console.error('Error deleting roadmap:', error);
      return NextResponse.json({
        success: false,
        message: 'Failed to delete roadmap.',
      }, { status: 500 });
    }
  }
