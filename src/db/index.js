import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected !! DB HOST:
    ${connectionInstance.connection.host}`);
    // console.log(connectionInstance);
  } catch (error) {
    console.error("MONGODB connection failed", error);
    //our application is run on a process so this process is refrence to that process
    process.exit(1);
  }
}; 
export default connectDB;
