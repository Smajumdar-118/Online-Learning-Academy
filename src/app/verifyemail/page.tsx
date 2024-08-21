"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { toast } from "react-hot-toast";

function VerifyEmailComponent() {
  const [verified, setverified] = useState(false);
  const [token, setToken] = useState("");
  const searchParams = useSearchParams();

  const router = useRouter();

  const handleVerify = async () => {
    try {
      const response = await axios.post("/api/verifyEmail", { token });
      console.log(response);
      if(response.data.status == 200){

        setverified(true);
        toast.success("Email verified successfully!");
      }
      else{
        toast.error("Verification failed. Please try again.");
      }
    } catch (error) {
      setverified(false);
      toast.error("Verification failed. Please try again.");
    }
  };

  useEffect(() => {
    const token = searchParams.get("token") || "";
    setToken(token);
    console.log(token);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white text-center">
          Verify Your Email
        </h2>
        <p className="text-black dark:text-gray-300 mb-6 text-center">
          To verify your email please click on the button given below. After successful verification, you can log in to your account again or directly move to the home page.
        </p>
        <p className="text-black dark:text-gray-300 mb-6 text-center">
          If verification failed please try again after some time, else contact us.
        </p>
        <button
          onClick={handleVerify}
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Verify your Email
        </button>
        {verified && (
          <p className="text-green-500 text-center mt-4">
            You are verified. Click{" "}
            <Link href="/" className="text-blue-700">
              here
            </Link>{" "}
            to redirect to the home page.
          </p>
        )}
        
      </div>
    </div>
  );
}

export default function VerifyEmail() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <VerifyEmailComponent />
    </Suspense>
  );
}
