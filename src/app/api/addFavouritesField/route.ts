import User from "@/models/userModel";
import { Connect } from "@/dbConfig/dbConfig";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await Connect();
        console.log("Connected to database");

        const matchingDocuments = await User.find({ favourites: { $exists: false } });
        console.log("Matching documents before update:", matchingDocuments);

        const result = await User.updateMany(
            { favourites: { $exists: false } },
            { $set: { favourites: [] } }
        );
        console.log("Update Result Acknowledged:", result.acknowledged);
        console.log("Matched Count:", result.matchedCount);
        console.log("Modified Count:", result.modifiedCount);

        return NextResponse.json({ message: "Favourites field added.", result });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "An error occurred.", error });
    }
};
