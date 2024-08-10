// data/courses.ts
export interface Lesson {
  id: number;
  title: string;
  duration: string;
}

export interface Instructor {
  name: string;
  bio: string;
  avatar: string;
}

export interface Course {
  id: number;
  title: string;
  description: string;
  instructor: Instructor;
  lessons: Lesson[];
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    description: "Learn to build dynamic websites and applications using HTML, CSS, JavaScript, and more.",
    instructor: {
      name: "John Doe",
      bio: "Full Stack Developer with 10+ years of experience.",
      avatar: "/images/bg1.webp",
    },
    lessons: [
      { id: 1, title: "Introduction to Web Development", duration: "10:00" },
      { id: 2, title: "HTML Basics", duration: "15:00" },
      { id: 3, title: "CSS Fundamentals", duration: "20:00" },
      { id: 4, title: "JavaScript Essentials", duration: "25:00" },
    ],
  },
  {
    id: 2,
    title: "Interface Design",
    description: "Learn to build dynamic websites and applications using HTML, CSS, JavaScript, and more.",
    instructor: {
      name: "John Doe",
      bio: "Full Stack Developer with 10+ years of experience.",
      avatar: "/images/bg1.webp",
    },
    lessons: [
      { id: 1, title: "Introduction to Web Development", duration: "10:00" },
      { id: 2, title: "HTML Basics", duration: "15:00" },
      { id: 3, title: "CSS Fundamentals", duration: "20:00" },
      { id: 4, title: "JavaScript Essentials", duration: "25:00" },
    ],
  },
  {
    id: 3,
    title: "SEO",
    description: "Learn to build dynamic websites and applications using HTML, CSS, JavaScript, and more.",
    instructor: {
      name: "John Doe",
      bio: "Full Stack Developer with 10+ years of experience.",
      avatar: "/images/bg1.webp",
    },
    lessons: [
      { id: 1, title: "Introduction to Web Development", duration: "10:00" },
      { id: 2, title: "HTML Basics", duration: "15:00" },
      { id: 3, title: "CSS Fundamentals", duration: "20:00" },
      { id: 4, title: "JavaScript Essentials", duration: "25:00" },
    ],
  },
];
