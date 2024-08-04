"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
      <div className="container mx-auto px-4 flex flex-wrap justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 mb-8 md:mb-0"
        >
          <h2 className="text-xl font-bold mb-4">Company Info</h2>
          <p className="text-gray-400">Sayan Majumdar</p>
          <p className="text-gray-400">Technical Consultant</p>
          <p className="text-gray-400">contact@example.com</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 mb-8 md:mb-0"
        >
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className="mb-2">
              <Link href="/">
                <p className="text-gray-400 hover:text-white transition duration-300">Home</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/about">
                <p className="text-gray-400 hover:text-white transition duration-300">About</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/projects">
                <p className="text-gray-400 hover:text-white transition duration-300">Projects</p>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact">
                <p className="text-gray-400 hover:text-white transition duration-300">Contact</p>
              </Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/3 mb-8 md:mb-0"
        >
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <ul className="flex space-x-4">
            <li>
              <Link href="https://github.com/Smajumdar-118" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.372 0 0 5.372 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.385-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.774.419-1.305.763-1.605-2.665-.305-5.466-1.333-5.466-5.933 0-1.31.467-2.38 1.235-3.22-.124-.305-.535-1.528.117-3.18 0 0 1.008-.322 3.302 1.23a11.46 11.46 0 013.005-.404c1.02.005 2.045.138 3.005.404 2.292-1.553 3.3-1.23 3.3-1.23.653 1.652.242 2.875.118 3.18.77.84 1.234 1.91 1.234 3.22 0 4.61-2.803 5.625-5.475 5.922.431.373.816 1.103.816 2.222v3.293c0 .32.192.694.801.576C20.565 21.795 24 17.302 24 12c0-6.628-5.372-12-12-12z"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/sayan-majumdar-01ab62259/" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.23 0H1.77C.79 0 0 .77 0 1.77v20.46C0 23.23.77 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.77V1.77C24 .77 23.23 0 22.23 0zM7.09 20.45H3.57V9h3.52v11.45zM5.33 7.46c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zm15.12 12.99h-3.52V14.5c0-1.42-.03-3.26-1.98-3.26-1.98 0-2.28 1.54-2.28 3.14v6.07h-3.52V9h3.38v1.56h.05c.47-.88 1.6-1.8 3.28-1.8 3.51 0 4.16 2.31 4.16 5.32v6.37z"/>
                </svg>
              </Link>
            </li>
            <li>
              <Link href="https://leetcode.com/u/SMajumdar4444/" className="text-gray-400 hover:text-white transition duration-300" target="_blank" rel="noopener noreferrer">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.407.593 24 1.324 24h21.352C23.407 24 24 23.407 24 22.676V1.324C24 .593 23.407 0 22.676 0zM9.46 20.084c-1.93 0-3.5-1.567-3.5-3.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.933-1.57 3.5-3.5 3.5zm0-11.167c-1.93 0-3.5-1.567-3.5-3.5 0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5c0 1.933-1.57 3.5-3.5 3.5zm6.417 7.417H7.083v1.834h8.792V16.334zm0-5.083H7.083v1.833h8.792v-1.833z"/>
                </svg>
              </Link>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="text-center text-gray-600 text-sm mt-8">
        &copy; {new Date().getFullYear()} Sayan Majumdar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
