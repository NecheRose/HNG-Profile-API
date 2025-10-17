import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import rateLimit from "express-rate-limit";
import profileRouter from "./routes/profileRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rate limiting middleware
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    status: "fail",
    message: "Too many requests, please try again later.",
  },
});

app.use(limiter);

// Routes
app.use("/", profileRouter);

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "API is running",
    timestamp: new Date().toISOString()
  });
});

// Server Listener
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})