// // "use client";

// // import Image from 'next/image';
// // import { motion } from 'framer-motion';
// // import { Course } from '@/data/course';

// // interface CoursePageProps {
// //   course: Course;
// // }

// // const CoursePage: React.FC<CoursePageProps> = ({ course }) => {
// //   return (
// //     <motion.div
// //       initial={{ opacity: 0 }}
// //       animate={{ opacity: 1 }}
// //       transition={{ duration: 0.5 }}
// //       className="container mx-auto p-4 dark:bg-black dark:text-white"
// //     >
// //       <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">{course.title}</h1>
// //       <p className="text-lg mb-6 dark:text-gray-300">{course.description}</p>

// //       <div className="flex items-center mb-6">
// //         <Image
// //           src={course.instructor.avatar}
// //           alt={course.instructor.name}
// //           width={50}
// //           height={50}
// //           className="rounded-full"
// //         />
// //         <div className="ml-4">
// //           <h2 className="text-xl font-bold dark:text-gray-100">{course.instructor.name}</h2>
// //           <p className="text-sm dark:text-gray-400">{course.instructor.bio}</p>
// //         </div>
// //       </div>

// //       <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Lessons</h2>
// //       <ul className="list-disc pl-6">
// //         {course.lessons.map(lesson => (
// //           <li key={lesson.id} className="mb-2">
// //             <h3 className="text-lg font-semibold dark:text-gray-100">{lesson.title}</h3>
// //             <p className="text-sm text-gray-600 dark:text-gray-400">Duration: {lesson.duration}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </motion.div>
// //   );
// // };

// // export default CoursePage;






// "use client";

// import Image from 'next/image';
// import { motion } from 'framer-motion';

// interface RoadmapProps {
//   roadmap: {
//     title: string;
//     description: string;
//     image?: string;
//     createdBy : string;
//     category : string;
//     importantLinks: { label: string; url: string; description?: string }[];

//   };
// }

// const CoursePage: React.FC<RoadmapProps> = ({ roadmap }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ duration: 0.5 }}
//       className="container mx-auto p-4 dark:bg-black dark:text-white"
//     >
//       <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">{roadmap.title}</h1>
//       <p className="text-lg mb-6 dark:text-gray-300">{roadmap.description}</p>

//       {roadmap.image && (
//         <div className="mb-6">
//           <Image
//             src={roadmap.image}
//             alt={roadmap.title}
//             width={800}
//             height={400}
//             className="rounded-lg"
//           />
//         </div>
//       )}

//       <div className="flex items-center mb-6">
//         <Image
//           src={roadmap.instructor.avatar}
//           alt={roadmap.instructor.name}
//           width={50}
//           height={50}
//           className="rounded-full"
//         />
//         <div className="ml-4">
//           <h2 className="text-xl font-bold dark:text-gray-100">{roadmap.instructor.name}</h2>
//           <p className="text-sm dark:text-gray-400">{roadmap.instructor.bio}</p>
//         </div>
//       </div>

//       <h2 className="text-2xl font-bold mb-4 dark:text-gray-100">Lessons</h2>
//       <ul className="list-disc pl-6">
//         {roadmap.lessons.map((lesson) => (
//           <li key={lesson.id} className="mb-2">
//             <h3 className="text-lg font-semibold dark:text-gray-100">{lesson.title}</h3>
//             <p className="text-sm text-gray-600 dark:text-gray-400">Duration: {lesson.duration}</p>
//           </li>
//         ))}
//       </ul>

//       {roadmap.importantLinks.length > 0 && (
//         <>
//           <h2 className="text-2xl font-bold mt-8 mb-4 dark:text-gray-100">Important Links</h2>
//           <ul className="list-disc pl-6">
//             {roadmap.importantLinks.map((link, index) => (
//               <li key={index} className="mb-2">
//                 <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//                   {link.label}
//                 </a>
//                 {link.description && <p className="text-sm dark:text-gray-400">{link.description}</p>}
//               </li>
//             ))}
//           </ul>
//         </>
//       )}
//     </motion.div>
//   );
// };

// export default CoursePage;
