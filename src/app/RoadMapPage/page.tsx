"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import axios from 'axios';

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
        <div className="container mx-auto px-4 py-10">
          <h1 className="text-4xl font-bold text-center mb-1">Explore Roadmaps</h1>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
     {roadmaps.map((roadmap)=>( 
    <CardContainer className="inter-var" key={roadmap.id}>
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
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
            src={roadmap.image || "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Add Favourite
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



