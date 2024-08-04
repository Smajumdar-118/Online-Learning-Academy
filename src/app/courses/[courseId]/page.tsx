'use client';

import { usePathname } from 'next/navigation';
import { Box, Heading, Text, Image, Button, Flex, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import Link from "next/link";
import { motion } from 'framer-motion';

interface Course {
  id: string;
  title: string;
  description: string;
  image: string;
  highlights: string[];
  whatYouWillLearn: string[];
}

const courseContent: Course[] = [
  {
    id: 'web-dev',
    title: 'Introduction to HTML',
    description: 'Learn the basics of HTML and how to structure web pages.',
    image: '/images/bg1.webp',
    highlights: [
      'HTML Syntax and Structure',
      'Creating Forms',
      'Semantic HTML Elements',
    ],
    whatYouWillLearn: [
      'How to write and structure HTML code',
      'Creating and validating HTML forms',
      'Using semantic HTML for better accessibility',
    ],
  },
  {
    id: 'css-for-beginners',
    title: 'CSS for Beginners',
    description: 'Discover how to style web pages using CSS.',
    image: '/images/css.png',
    highlights: [
      'CSS Selectors and Properties',
      'Box Model and Layout',
      'Responsive Design Basics',
    ],
    whatYouWillLearn: [
      'Understanding CSS fundamentals',
      'Applying styles to HTML elements',
      'Creating responsive web designs',
    ],
  },
  {
    id: 'javascript-fundamentals',
    title: 'JavaScript Fundamentals',
    description: 'Understand the core concepts of JavaScript.',
    image: '/images/javascript.png',
    highlights: [
      'Variables and Data Types',
      'Functions and Events',
      'DOM Manipulation',
    ],
    whatYouWillLearn: [
      'Basic JavaScript syntax and operations',
      'Handling user interactions and events',
      'Manipulating web page content dynamically',
    ],
  },
  // Add more courses here
];

const CoursePage = () => {
  const pathname = usePathname();
  const [courseId, setCourseId] = useState<string | null>(null);
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (pathname) {
      const parts = pathname.split('/');
      const id = parts[parts.length - 1];
      setCourseId(id);

      // Fetch course data based on the id
      const fetchedCourse = courseContent.find(c => c.id === id);
      setCourse(fetchedCourse || null);
    }
  }, [pathname]);

  if (!course) return <Text>Loading...</Text>;

  return (
    <Box
      minHeight="100vh"
      bgImage="url('/images/background.jpg')"
      bgSize="cover"
      bgPosition="center"
      p={8}
      color="white"
    >
      <Box bg="rgba(0, 0, 0, 0.6)" p={8} borderRadius="lg" shadow="xl">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <Heading as="h1" size="3xl" mb={4}>{course.title}</Heading>
          <Text fontSize="xl" mb={6}>{course.description}</Text>
          <Image
            src={course.image}
            alt={course.title}
            boxSize="250px"
            objectFit="cover"
            mx="auto"
            borderRadius="full"
            mb={6}
          />
          <Link href="/enroll">
            <Button colorScheme="teal" size="lg">Enroll Now</Button>
          </Link>
        </motion.div>

        <Flex direction="column" align="center">
          <Box mb={8}>
            <Heading as="h2" size="lg" mb={4}>Course Highlights</Heading>
            <Stack spacing={2} textAlign="left">
              {course.highlights.map((highlight, index) => (
                <Text key={index}>&#8226; {highlight}</Text>
              ))}
            </Stack>
          </Box>

          <Box>
            <Heading as="h2" size="lg" mb={4}>What You'll Learn</Heading>
            <Stack spacing={2} textAlign="left">
              {course.whatYouWillLearn.map((item, index) => (
                <Text key={index}>&#8226; {item}</Text>
              ))}
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default CoursePage;
