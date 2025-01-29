import User from "@/models/userModel";
import { Connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await Connect();
        console.log("Connected to database");

        const matchingDocuments = await User.find({ profilePhoto: { $exists: false } });
        console.log("Matching documents before update:", matchingDocuments);

        const result =await User.updateMany({}, { $set: { profilePhoto: "https://static.vecteezy.com/system/resources/thumbnails/025/037/813/small_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png" } });

        console.log("Update Result Acknowledged:", result.acknowledged);
        console.log("Matched Count:", result.matchedCount);
        console.log("Modified Count:", result.modifiedCount);

        return NextResponse.json({ message: "Favourites field added.", result });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred.", error });
    }
};
