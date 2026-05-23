import mongoose from "mongoose";

export async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;

  if (!mongoUri) {
    console.warn("[GuardWrite AI] MONGODB_URI not provided. Running without database connection.");
    return;
  }

  try {
    await mongoose.connect(mongoUri);
    console.log("[GuardWrite AI] MongoDB connected.");
  } catch (error) {
    console.warn(`[GuardWrite AI] MongoDB connection failed: ${error.message}`);
  }
}
