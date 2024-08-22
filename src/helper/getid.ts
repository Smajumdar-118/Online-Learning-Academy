import jwt from "jsonwebtoken";


export async function getID() {
    const token = document.cookie;
    const userid = jwt.verify(token , process.env.NEXT_PUBLIC_SECRET_KEY!);
    return userid;
}