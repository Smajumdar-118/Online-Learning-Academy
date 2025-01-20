// src/app/roadmaps/[roadmapId]/page.tsx

import { notFound } from 'next/navigation';
import { Connect } from '@/dbConfig/dbConfig';
import Roadmap from '@/models/roadmapMode';
import RoadmapPageComponent from '@/components/RoadmapPage';

interface RoadmapPageProps {
  params: Promise<{ roadmapId: string }>;
}

const RoadmapPage = async ({ params }: RoadmapPageProps) => {
  try {
    await Connect();
    const roadmapId = await parseInt((await params).roadmapId, 10);
    if (isNaN(roadmapId)) {
      notFound(); 
    }
    const roadmap = await Roadmap.findOne({ id: roadmapId });
    if (!roadmap) {
      notFound(); 
    }

    return <RoadmapPageComponent roadmap={roadmap} />;
  } catch (error) {
    console.error("Error rendering roadmap page:", error);
    notFound(); 
  }
};

export default RoadmapPage;
