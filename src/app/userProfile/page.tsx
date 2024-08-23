"use client";
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast';

interface User {
  _id: string;
  username: string;
  email: string;
  isVerified: string;
  isAdmin: string;
  profilePhoto: string; // New property for profile photo URL
}

function Page() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.post("/api/getUser");
        setUser(response.data.user || null);
      } catch (error) {
        console.error("Error fetching user:", error);
        setUser(null);
      }
    };

    fetchUser();
  }, []);
  const handleLogout = async() => {
    try {
      const response = await axios.get("/api/logout");
      console.log(response);
      toast.success(response.data.message);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        {user ? (
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">User Profile</h1>
            <img
              // src={user.profilePhoto || "/images/ABS_6792.jpg"}
              src={"/images/ABS_6792.JPG"}
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
            />
            <div className="space-y-4">
              <p className="text-lg"><span className="font-semibold">User ID:</span> {user._id}</p>
              <p className="text-lg"><span className="font-semibold">Username:</span> {user.username}</p>
              <p className="text-lg"><span className="font-semibold">Email:</span> {user.email}</p>
              <p className="text-lg"><span className="font-semibold">Is Verified:</span> {user.isVerified}</p>
              <p className="text-lg"><span className="font-semibold">Is Admin:</span> {user.isAdmin}</p>
            </div>
            <button
              onClick={handleLogout}
              className="mt-6 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <svg
              className="w-8 h-8 text-gray-200 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}

export default Page;
