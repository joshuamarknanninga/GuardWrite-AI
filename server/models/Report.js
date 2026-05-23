import mongoose from "mongoose";

const reportSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["trespass", "disturbance", "theft", "medical", "maintenance", "safety hazard", "lost property", "other"]
    },
    rawNotes: { type: String, required: true },
    formattedReport: { type: String, required: true }
  },
  { timestamps: true }
);

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema);

export default Report;
