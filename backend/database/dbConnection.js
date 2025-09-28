import mongoose from "mongoose";

export const dbConnection = () => {
  const mongoUri = process.env.MONGO_URI;
  if (!mongoUri) {
    console.error("MONGO_URI is not defined in .env file");
    process.exit(1);
  }

  mongoose
    .connect(mongoUri, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT_SYSTEM_DEPLOYED",
    })
    .then(() => {
      console.log("Connected to MongoDB Atlas!");
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err.message}`);
      process.exit(1);
    });
};