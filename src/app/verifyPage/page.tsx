'use client';
import { motion } from "framer-motion";
import Image from "next/image";


export default function VerificationPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg p-8 md:p-16 max-w-md text-center"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Email Sent"
            width={150}
            height={150}
            className="mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-2xl font-semibold dark:text-white"
        >
          Verification Email Sent
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="text-gray-600 dark:text-gray-400 mt-4"
        >
          We&#39;ve sent a verification link to your email. Please check your inbox and verify your email address to continue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="mt-8"
        >
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600">
            Back to Home
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
}
