import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String },
    inquiryType: {
      type: String,
      enum: ["general", "support", "sales", "partnership"],
      default: "general",
    },
    message: { type: String, required: true },
    status: { type: String, default: "new" },
    ipAddress: { type: String },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

export default mongoose.model("Contact", contactSchema);
