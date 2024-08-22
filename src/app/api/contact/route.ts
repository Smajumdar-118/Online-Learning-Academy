import { Connect } from "@/dbConfig/dbConfig";
import Contact from "@/models/contactModel";
import { NextRequest, NextResponse } from "next/server";

Connect();

export async function POST(req: NextRequest) {
  try {
    const reqBody = await req.json();
    const { name, email, message } = reqBody;

    if (!name || !email || !message) {
      return NextResponse.json({
        message: "Please provide name, email, and message.",
        status: 400,
      });
    }

    let userContact = await Contact.findOne({ email });

    if (userContact) {
      
      if (userContact.messages.length >= 5) {
        return NextResponse.json({
          message: "You have reached the limit of 5 messages.",
          status: 403,
        });
      }

      userContact.messages.push({ content: message, timestamp: new Date() });
    } else {
      
      userContact = new Contact({
        name,
        email,
        messages: [{ content: message, timestamp: new Date() }],
      });
    }

    
    const savedContact = await userContact.save();

    return NextResponse.json({
      savedContact,
      message: "Message sent successfully.",
      status: 201,
    });
  } catch (error) {
    console.error("Error saving contact message:", error);
    return NextResponse.json({
      message: "Internal Server Error",
      status: 500,
    });
  }
}
