"use client";

import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import dotenv from 'dotenv';
dotenv.config();


interface RoadmapFormValues {
  image: any;
  id: number;
  title: string;
  description: string;
  createdBy: string;
  category: string;
  importantLinks: {
    label: string;
    title: string;
    url: string;
  }[];
}

const AddRoadmapPage = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<RoadmapFormValues>({
    defaultValues: {
      importantLinks: [{ label: "", title: "", url: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "importantLinks",
  });

  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleImageUpload = async (file: File) => {
    const formData = new FormData();
    const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || "";
    const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "";
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("cloud_name", cloudName);
  
    try {
      setUploadingImage(true);
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData
      );
      setUploadingImage(false);
      return response.data.secure_url;
    } catch (error: any) {
      setUploadingImage(false);
      // console.error("Image upload failed:", error.response?.data || error.message);
      toast.error("Failed to upload image. Please check the console for details.");
      return null;
    }
  };
  

  const onSubmit = async (data: RoadmapFormValues) => {
    try {
      const fileInput = document.querySelector<HTMLInputElement>("#imageUpload");
      if (fileInput?.files?.[0]) {
        const secureUrl = await handleImageUpload(fileInput.files[0]);
        if (secureUrl) {
          data.image = secureUrl;
        } else {
          return;
        }
      } else {
        toast.error("Please upload an image.");
        return;
      }

      const response = await axios.post("/api/Roadmap", data);
      if (response.status === 201) {
        toast.success("Roadmap added successfully!");
        reset();
        setImagePreview(null);
      }
    } catch (error) {
      console.error("Error adding roadmap:", error);
      toast.error("Failed to add roadmap. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 text-gray-900 dark:text-gray-100 py-10 px-4">
      <div className="container mx-auto max-w-3xl bg-white dark:bg-zinc-800 shadow-xl rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Add New Roadmap</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* ID */}
          <div>
            <label className="block font-medium mb-2">ID</label>
            <input
              type="number"
              {...register("id", { required: "ID is required" })}
              className="w-full p-3 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
            />
            {errors.id && <p className="text-red-500 text-sm">{errors.id.message}</p>}
          </div>

          {/* Title */}
          <div>
            <label className="block font-medium mb-2">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full p-3 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
            />
            {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-2">Description</label>
            <textarea
              {...register("description", { required: "Description is required" })}
              className="w-full p-3 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
              rows={4}
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description.message}</p>
            )}
          </div>

          {/* Image Upload */}
          <div>
            <label className="block font-medium mb-2">Upload Image</label>
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setImagePreview(URL.createObjectURL(file));
                }
              }}
              className="w-full p-3 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
            />
            {imagePreview && (
              <div className="mt-4">
                <p className="text-sm font-medium mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="w-full max-h-64 object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Created By */}
          <div>
            <label className="block font-medium mb-2">Created By</label>
            <input
              type="text"
              {...register("createdBy", { required: "Created By is required" })}
              className="w-full p-3 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
            />
            {errors.createdBy && (
              <p className="text-red-500 text-sm">{errors.createdBy.message}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-2">Category</label>
            <input
              type="text"
              {...register("category", { required: "Category is required" })}
              className="w-full p-3 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
            />
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          {/* Important Links */}
          <div>
            <label className="block font-medium mb-2">Important Links</label>
            {fields.map((field, index) => (
              <div key={field.id} className="space-y-2 mb-4">
                <input
                  type="text"
                  placeholder="Label"
                  {...register(`importantLinks.${index}.label`, {
                    required: "Label is required",
                  })}
                  className="w-full p-2 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
                />
                <input
                  type="text"
                  placeholder="Title"
                  {...register(`importantLinks.${index}.title`, {
                    required: "Title is required",
                  })}
                  className="w-full p-2 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
                />
                <input
                  type="url"
                  placeholder="URL"
                  {...register(`importantLinks.${index}.url`, {
                    required: "URL is required",
                  })}
                  className="w-full p-2 border rounded-lg dark:bg-zinc-700 dark:border-zinc-600"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  className="text-red-500 text-sm"
                >
                  Remove Link
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => append({ label: "", title: "", url: "" })}
              className="text-blue-500 text-sm"
            >
              + Add Another Link
            </button>
          </div>

          <button
            type="submit"
            disabled={uploadingImage}
            className={`w-full py-3 ${
              uploadingImage ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } text-white rounded-lg font-medium`}
          >
            {uploadingImage ? "Uploading..." : "Add Roadmap"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoadmapPage;
