import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json({ limit: "1mb" }));
app.use(
  cors({
    // Allow all origins in development, restrict in production
    origin: process.env.NODE_ENV === "production" ? process.env.FRONTEND_URL : "*",
    methods: ["GET", "POST"],
    credentials: true,
  })
);

// Database connection
connectDB();

// Routes
app.use("/api/contact", contactRoutes);

// Health check
app.get("/", (req, res) => res.send("🚀 ABROB Contact API is running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🛸 Server listening on :${PORT}`));
