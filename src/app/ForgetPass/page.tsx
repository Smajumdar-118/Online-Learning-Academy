"use client";
import { useEffect, useState, Suspense } from "react";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";
import {IconLoader} from "@tabler/icons-react";
import { toast } from "react-hot-toast";

import axios from "axios";

 function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [token, setToken] = useState("");
  const [loading , setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSubmit = async(e:any) => {
    e.preventDefault();
    setLoading(true);
    try {

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      // Handle the form submission here
      const res = await axios.post("/api/SetPass" , {token , email , confirmPassword} );
      console.log(res.data.status);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      if (res.data.status === 200) {
        toast.success("Password has been changed Successfully");
        router.push("/LoginPage");
        toast.success("Please login again");
      }
      else toast.error("Please Verify Your Email");

    } catch (error) {
      console.log(error);
    } finally{
      setLoading(false);
    }
    
  };

  useEffect(() => {
    const token = searchParams.get("token") || "";
    setToken(token);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900 to-purple-600 text-black">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-md p-8 space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
        <p className="text-gray-600 text-center">
          Enter your email and new password to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <AiOutlineMail className="absolute text-gray-500 top-3 left-3" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <div className="relative">
            <AiOutlineLock className="absolute text-gray-500 top-3 left-3" />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>
          <div className="relative">
            <AiOutlineLock className="absolute text-gray-500 top-3 left-3" />
            <input
              type="password"
              placeholder="Confirm New Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-200"
          > {loading ? (
            <IconLoader className="animate-spin h-5 w-5 mx-auto" />
          ) : (
            "Reset Password"
          )}
            
          </button>
        </form>

        {/* Extra Link */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Remember your password?{" "}
          <a href="/LoginPage" className="text-blue-500 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default function ForgetPasswordCOmponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ForgetPassword />
    </Suspense>
  )
}
