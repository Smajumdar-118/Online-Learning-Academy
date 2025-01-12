import mongoose from 'mongoose';

const { Schema } = mongoose;

// Schema for important links within a roadmap
const ImportantLinkSchema = new Schema({
  label: { type: String }, // Label for the link (e.g., "Official Docs", "Tutorial")
  url: { type: String, required: true }, // The actual URL
  description: { type: String, required: false }, // Optional description for the link
});

// Main Roadmap Schema
const RoadmapSchema = new Schema(
  {
    id : {type : Number,required: true, unique : true},
    title: { type: String, required: true}, 
    description: { type: String, required: true }, 
    image: { type: String, required: false }, 
    createdBy: { type: String, required: true }, 
    category: { type: String, required: false }, 
    importantLinks: [ImportantLinkSchema], 
    createdAt: { type: Date, default: Date.now }, 
    updatedAt: { type: Date, default: Date.now }, 
    isPublished: { type: Boolean, default: false }, 
  },
  {
    timestamps: true, 
  }
);

export default mongoose.models.Roadmap || mongoose.model('Roadmap', RoadmapSchema);


// const Roadmaps = mongoose.models.Roadmaps || mongoose.model("Roadmaps" ,RoadmapSchema);
// export default Roadmaps;