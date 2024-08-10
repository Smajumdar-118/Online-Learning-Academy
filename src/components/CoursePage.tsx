// components/CoursePage.tsx
"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Course } from '@/data/course';

interface CoursePageProps {
  course: Course;
}

const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
      <p className="text-lg mb-6">{course.description}</p>

      <div className="flex items-center mb-6">
        <Image
          src={course.instructor.avatar}
          alt={course.instructor.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <div className="ml-4">
          <h2 className="text-xl font-bold">{course.instructor.name}</h2>
          <p className="text-sm">{course.instructor.bio}</p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-4">Lessons</h2>
      <ul className="list-disc pl-6">
        {course.lessons.map(lesson => (
          <li key={lesson.id} className="mb-2">
            <h3 className="text-lg font-semibold">{lesson.title}</h3>
            <p className="text-sm text-gray-600">Duration: {lesson.duration}</p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default CoursePage;
