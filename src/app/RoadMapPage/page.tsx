"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import axios from 'axios';
import toast from 'react-hot-toast';


interface Roadmap {
  id: number;
  title: string;
  description: string;
  createdBy: string;
  image: string;
}

const RoadmapsPage = () => {
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleAddToFavourites = async (id: number) => {
    try {
      const response = await axios.post('/api/favourites', { roadmapId : id}); 
      console.log(response.status);
      if(response.status == 201) toast.success('Successfully Added!')
      if(response.status == 405) alert('Please Signin to save in your profile!')
    } catch (error) {
      console.error('Error adding to favourites:', error);
    }
  };

  useEffect(() => {
    const fetchRoadmaps = async () => {
      try {
        const response = await axios.get('/api/Roadmap');
        if (Array.isArray(response.data.roadmaps)) {
          setRoadmaps(response.data.roadmaps);
        } else {
          throw new Error('Unexpected response format.');
        }
      } catch (error: any) {
        console.error('Error fetching roadmaps:', error);
        setError(error.message || 'Failed to fetch roadmaps.');
      } finally {
        setLoading(false);
      }
    };
    

    fetchRoadmaps();
  }, []);



  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
        <p className="text-lg">Loading roadmaps...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <>
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 py-12">
  <div className="container mx-auto px-4 py-16">
    <h1 className="text-4xl font-bold text-center mb-6 mt-4">Explore Roadmaps</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {roadmaps.map((roadmap) => (
        <CardContainer className="inter-var" key={roadmap.id}>
          <CardBody className="relative bg-gray-50 group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full max-w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {roadmap.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {roadmap.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4" key={roadmap.id}>
              <Image
                src={roadmap.image || "https://via.placeholder.com/300"}
                height="1000"
                width="1000"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-6 space-x-4">
              <CardItem
                translateZ={20}
                as={Link}
                href={`/roadmaps/${roadmap.id}`}
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                <button onClick={() => handleAddToFavourites(roadmap.id)}>
                  Add Favourite
                </button>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  </div>
</div>

    </>
  );
  
};

export default RoadmapsPage



