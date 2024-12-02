import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB!");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    // Optional: Exit process if connection fails in a critical app
    process.exit(1);
  }
}
