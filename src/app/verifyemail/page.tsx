"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


export default function VerifyEmail() {
  const [verified, setverified] = useState(false);
  const [token, setToken] = useState("");
  const searchParams = useSearchParams();

  const router = useRouter();

  const handleVerify = async()=>{
    await axios.post("/api/verifyEmail" , {token});
    setverified(true);
    
  }

  useEffect(()=>{
   
    const token  = searchParams.get('token') || "";
    setToken(token);
    console.log(token);

  }  ,[])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">
          Verify Your Email
        </h2>
        <p className="text-black dark:text-gray-300 mb-6 text-center">
          To verify your email please click on the button given below. After successdul verification you can login to your account again or you can directly move to home page.
        </p>
        <p className="text-black dark:text-gray-300 mb-6 text-center">
          If verification failed please try again after sometime else contact with us
        </p>
        <button
          onClick={handleVerify}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Verify your Email
        </button>
        {verified && (
          <p className="text-green-500 text-center mt-4">
           You are verified. Click <Link href="/" className="text-blue-700">here</Link> to redirect home page
          </p>
          
        )}
      </div>
    </div>
  );
}
