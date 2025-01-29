import { Connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import jwt from 'jsonwebtoken'
import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import cloudinary from "@/helper/cloudinary";






  export const config = {
    api: {
      bodyParser: false, // Disable body parsing as we handle formData
    },
  };



Connect();

export async function POST(req: NextRequest) {
    try { 
        const cookieStore = cookies();
        const Token = (await cookieStore).get('token')?.value || "";
        const decodedToken = jwt.verify(Token, process.env.NEXT_PUBLIC_SECRET_KEY!);
        const { userid } = decodedToken as { userid: string };
        // console.log(userid);
        const user = await User.findOne({_id :userid})
        if(!user) {
            return NextResponse.json({message : "User Doesn't found" , status : 404});
        }
        const formData = await req.formData();
        const imageFile = formData.get("profilePhoto");
        

        if (!imageFile || !(imageFile instanceof Blob)) {
            return NextResponse.json(
              { message: "Invalid or missing image file" },
              { status: 400 }
            );
        }
        const buffer = await imageFile.arrayBuffer();
        const base64Image = `data:${imageFile.type};base64,${Buffer.from(buffer).toString("base64")}`;
        
        if (user.profilePhoto) {
            const oldPublicId = user.profilePhoto
        .split("/")
        .slice(-2)
        .join("/")
        .replace("profile_photos/", "")
        .split(".")[0];
        await cloudinary.uploader.destroy(`profile_photos/${oldPublicId}`);
          }

    const uploadResult = await cloudinary.uploader.upload(base64Image, {
      folder: "profile_photos",
      public_id: `${userid}-${Date.now()}`,
    });
    
     user.profilePhoto = uploadResult.secure_url;
     await user.save();
     
    return NextResponse.json({ profilePhoto: uploadResult.secure_url }, { status: 200 });   
    } catch (error) {
        console.log("Internal Error")
        return NextResponse.json({message : "Internal Error"});
    }
}
