import React, { useState } from "react";
import { toast } from "react-hot-toast";

const ProfilePhotoUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);

    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return toast.error("Please select a file first.");
    setUploading(true);

    const formData = new FormData();
    formData.append("profilePhoto", file);

    const response = await fetch("/api/upload-profile-photo", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setUploading(false);

    if (response.ok) {
      toast.success("Profile photo updated successfully!");
      setPreview(data.profilePhoto); // Update preview with the uploaded image
    } else {
      toast.error(data.message || "Something went wrong");
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
        />
      </div>
      {preview && (
        <img
          src={preview}
          alt="Preview"
          className="w-32 h-32 rounded-full object-cover mx-auto"
        />
      )}
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {uploading ? "Uploading..." : "Upload Photo"}
      </button>
    </div>
  );
};

export default ProfilePhotoUploader;
