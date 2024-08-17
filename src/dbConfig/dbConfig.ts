import mongoose from 'mongoose';

export async function Connect(){
    try {
        mongoose.connect(process.env.NEXT_PUBLIC_MONGO_URI!);
        const  connection = mongoose.connection

        connection.on('connected' , ()=>{
            console.log("MongoDB Connected");
        })

        connection.on('error' , (err : any)=>{
            console.log("Database Connection Error "+ err);
            process.exit();
        })

    } catch (error) {
        console.log("Connection Failed!!" + error);
    }
}