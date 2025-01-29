"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import ProfilePhotoUploader from "@/components/ProfilePhotoUploader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface User {
  _id: string;
  username: string;
  email: string;
  isVerified: string;
  isAdmin: string;
  profilePhoto: string;
}

export default function Page() {
  const [user, setUser] = useState<User | null>(null);
  const [profilePhoto, setProfilePhoto] = useState<string>(
    "https://static.vecteezy.com/system/resources/thumbnails/025/037/813/small_2x/portrait-of-smiling-young-girl-for-profile-picture-illustration-generative-ai-png.png"
  );
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/getUser");
        if (!response.data.user) {
          if (!sessionStorage.getItem("redirected")) {
            toast.error("You are not logged in. Please login to see your Dashboard");
            sessionStorage.setItem("redirected", "true");
            router.push("/LoginPage");
          }
          return;
        }
        setUser(response.data.user);
        if (response.data.user.profilePhoto) setProfilePhoto(response.data.user.profilePhoto);
        sessionStorage.removeItem("redirected");
      } catch (error) {
        console.error("Error fetching user:", error);
        if (!sessionStorage.getItem("redirected")) {
          toast.error("An error occurred while fetching your user details.");
          sessionStorage.setItem("redirected", "true");
          router.push("/LoginPage");
        }
      }
    };

    fetchUser();
  }, [router]);

  const handleLogout = async () => {
    try {
      const response = await axios.get("/api/logout");
      toast.success(response.data.message);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }} 
        className="w-full max-w-lg p-8 bg-gray-900/50 backdrop-blur-md rounded-2xl shadow-lg"
      >
        {user ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-4 text-white">User Profile</h1>

    
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Avatar className="w-32 h-32 mx-auto mb-4 border-4 border-gray-700 shadow-md">
                {/* <AvatarImage src={profilePhoto} alt="Profile Photo" /> */}
                <img
                  src={profilePhoto}
                  alt="Profile"
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
                {/* <AvatarFallback className="bg-gray-700 text-white">{user.username.charAt(0)}</AvatarFallback> */}
              </Avatar>
            </motion.div>

            <div className="space-y-3">
              <p className="text-lg"><span className="font-semibold">Username:</span> {user.username}</p>
              <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-lg"><span className="font-semibold">Verified:</span> {user.isVerified ? "✅ Yes" : "❌ No"}</p>
              <p className="text-lg"><span className="font-semibold">Admin:</span> {user.isAdmin ? "✅ Yes" : "❌ No"}</p>
            </div>

            
            <div className="mt-6">
              <ProfilePhotoUploader />
            </div>

            
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Button onClick={handleLogout} className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Logout
              </Button>
            </motion.div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <svg className="w-8 h-8 text-gray-200 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </div>
        )}
      </motion.div>
    </div>
  );
}
