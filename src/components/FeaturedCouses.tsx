"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import Image from "next/image";
import Link from "next/link";

const courses = [
    {
      title: "Web Development",
      description: "This is a description for Course 1.Lorem23",
      imageUrl: "https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-122084136.jpg",
    },
    {
      title: "UI/UX Designing",
      description: "This is a description for Course 2.",
      imageUrl: "https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg",
    },
    {
      title: "SEO Optimization",
      description: "This is a description for Course 2.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA3JaLeUYNwvRe2q1Ne0B1TipRcqmbMMuMvg&s",
    },
    {
      title: "Interface Design",
      description: "This is a description for Course 2.",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpem4gPPWGHaXXDKzvWs-N1JPs_PQry8_eTQ&s",
    },
    {
      title: "DS and Algorithms",
      description: "This is a description for Course 2.",
      imageUrl: "https://media.licdn.com/dms/image/C5612AQEz0hpmCQQ9xA/article-cover_image-shrink_600_2000/0/1645599766887?e=2147483647&v=beta&t=bofydXF-Sf5Q_t5T8xX0Cz1Yuk4uSLma4sUb61WhogY",
    },
    {
      title: "Machine Learning",
      description: "This is a description for Course 3.",
      imageUrl: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
    },

  ];


function FeaturedCouses() {
  return (
    <section className="py-12 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Latest Courses</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <BackgroundGradient key={index} className="rounded-[22px] max-w-full p-4 sm:p-10 bg-white dark:bg-zinc-900 shadow-md overflow-hidden mx-auto">
              <img src={course.imageUrl} alt={course.title} className="w-full h-48 object-cover rounded-t-[22px]" />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">{course.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{course.description}</p>
                <button className="p-[3px] relative">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
          <Link href={'#_'}>Learn More</Link>
        </div>
      </button>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
      <div className="text-center mx-auto mt-10">
      <a href="#_" className="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md">
<span className="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
<span className="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
<span className="relative text-white">View All Courses</span>
</span>
</a>
      </div>
    </section>
    
  )
}

export default FeaturedCouses
