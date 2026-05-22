import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import reportRoutes from "./routes/reportRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "GuardWrite AI API" });
});

app.use("/api/reports", reportRoutes);

connectDB();

app.listen(PORT, () => {
  console.log(`[GuardWrite AI] API server running on port ${PORT}`);
});
