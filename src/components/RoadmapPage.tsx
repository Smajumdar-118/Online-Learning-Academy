// src/app/components/RoadmapPage.tsx
interface RoadmapProps {
    roadmap: {
      title: string;
      description: string;
      image?: string;
      createdBy: string;
      category?: string;
      importantLinks: { url: string; label: string; description?: string }[];
    };
  }
  
  const RoadmapPageComponent: React.FC<RoadmapProps> = ({ roadmap }) => {
    return (
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold">{roadmap.title}</h1>
        <p className="mt-2 text-lg">{roadmap.description}</p>
  
        {roadmap.image && (
          <img
            src={roadmap.image}
            alt={roadmap.title}
            className="mt-6 w-full h-auto"
          />
        )}
  
        <h2 className="mt-6 text-2xl font-semibold">
          Created By: {roadmap.createdBy}
        </h2>
  
        {roadmap.category && (
          <p className="mt-2 text-lg">Category: {roadmap.category}</p>
        )}
  
        <h3 className="mt-6 text-xl font-semibold">Important Links</h3>
        <ul className="list-disc pl-6">
          {roadmap.importantLinks.map((link, index) => (
            <li key={index} className="mt-2">
              <a
                href={link.url}
                className="text-blue-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
              {link.description && (
                <p className="mt-1 text-sm text-gray-600">{link.description}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default RoadmapPageComponent;
  