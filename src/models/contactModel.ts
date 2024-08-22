import mongoose, { Schema, Document } from 'mongoose';

export interface IContact extends Document {
  name: string;
  email: string;
  messages: { content: string; timestamp: Date }[];
}

const ContactSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  messages: [
    {
      content: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    },
  ],
});

const Contact = mongoose.models.Contact || mongoose.model("Contact" ,ContactSchema);

export default Contact;
