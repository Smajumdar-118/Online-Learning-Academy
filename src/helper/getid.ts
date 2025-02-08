// import jwt from "jsonwebtoken";


// export async function getID() {
//     const token = document.cookie;
//     const userid = jwt.verify(token , process.env.NEXT_PUBLIC_SECRET_KEY!);
//     return userid;
// }


import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function getID(): Promise<string | jwt.JwtPayload | undefined> {
  try {
    const cookieString = document.cookie; // Get all cookies
    console.log("Sayan Majumdar");
    console.log(cookieString);
    const cookies = Object.fromEntries(
      cookieString.split("; ").map((cookie) => {
        const [key, value] = cookie.split("=");
        return [key, decodeURIComponent(value)];
      })
    );
    console.log(cookies);
    const token = cookies["token"];
    if (!token) {
      throw new Error("Token not found in cookies");
    }

    // Verify the token using the secret key
    // const userid = jwt.verify(token, process.env.NEXT_PUBLIC_SECRET_KEY!);
    console.log(token);
    return token;
  } catch (error) {
    console.error("Error verifying token:", error);
    return undefined;
  }
}
