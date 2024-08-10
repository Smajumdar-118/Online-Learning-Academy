// app/courses/[courseId]/page.tsx
import { notFound } from 'next/navigation';
import { courses, Course } from '@/data/course';
import CoursePage from '@/components/CoursePage';

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export async function generateStaticParams() {
  return courses.map(course => ({
    courseId: course.id.toString(),
  }));
}

const getCourseById = (id: number): Course | undefined => {
  return courses.find(course => course.id === id);
};

const CoursePageContainer: React.FC<CoursePageProps> = ({ params }) => {
  const courseId = parseInt(params.courseId, 10);
  const course = getCourseById(courseId);

  if (!course) {
    notFound();
  }

  return <CoursePage course={course} />;
};

export default CoursePageContainer;
