// app/roadmaps/[roadmapId]/page.tsx
import { notFound } from 'next/navigation';
import { Connect } from '@/dbConfig/dbConfig'; // Make sure this path is correct
import Roadmap from '@/models/roadmapMode';
// import { RoadmapType } from '@/types'; // Ensure this path is correct

interface RoadmapPageProps {
  params: {
    roadmapId: string;
  };
}

export async function generateStaticParams() {
  await Connect(); // Ensure DB connection
  const roadmaps = await Roadmap.find({}, { id: 1 }); // Fetch only the IDs of roadmaps
  return roadmaps.map((roadmap) => ({
    roadmapId: roadmap.id.toString(),
  }));
}

const RoadmapPage: React.FC<RoadmapPageProps> = async ({ params }) => {
  const roadmapId = parseInt(params.roadmapId, 10); // Convert roadmapId from string to number

  await Connect(); // Ensure the database connection is established
  const roadmap = await Roadmap.findOne({ id: roadmapId });

  if (!roadmap) {
    notFound(); // Return 404 if the roadmap isn't found
  }

  // Render the roadmap details here
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold">{roadmap.title}</h1>
      <p className="mt-2 text-lg">{roadmap.description}</p>

      {/* Display image if available */}
      {roadmap.image && (
        <img src={roadmap.image} alt={roadmap.title} className="mt-6 w-full h-auto" />
      )}

      <h2 className="mt-6 text-2xl font-semibold">Created By: {roadmap.createdBy}</h2>

      {/* Category if exists */}
      {roadmap.category && <p className="mt-2 text-lg">Category: {roadmap.category}</p>}

      <h3 className="mt-6 text-xl font-semibold">Important Links</h3>
      <ul className="list-disc pl-6">
        {roadmap.importantLinks.map((link:any , index:any) => (
          <li key={index} className="mt-2">
            <a href={link.url} className="text-blue-500" target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
            {link.description && <p className="mt-1 text-sm text-gray-600">{link.description}</p>}
          </li>
        ))}
      </ul>

      {/* Add more content for roadmap as needed */}
    </div>
  );
};

export default RoadmapPage;
