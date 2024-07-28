const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://Harshasri:Harsha@cluster0.uh1gb19.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
};

module.exports = { connectToDatabase };
