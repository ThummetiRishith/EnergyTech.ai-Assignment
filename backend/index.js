import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

/* ===============================
   MIDDLEWARES
================================ */
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "http://localhost:3000",

      // ✅ ADD ALL YOUR VERCEL FRONTEND DOMAINS
      "https://energy-tech-ai-assignment.vercel.app",
      "https://energy-tech-ai-assignment-dmhm7aty0.vercel.app",
      "https://energy-tech-ai-assignment-68q6k05e.vercel.app",
    ],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

/* ===============================
   ROUTES
================================ */
app.use("/api/auth", authRoutes);

/* ===============================
   HEALTH CHECK (OPTIONAL BUT GOOD)
================================ */
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

/* ===============================
   SERVER
================================ */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
