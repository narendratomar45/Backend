// require ('dotenv').config({path:'./env'}); or
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();

/* 
import express from "express";
const app = express();
//connect database
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    //${process.env.MONGODB_URL} iss lin se to database connect ho gya and (/${DB_NAME}) this shows databse name
    app.on("error", (error) => {
      //DB connect hone ke bad listeners bhi aate hain, jo ki app ke pass hote hainn ,
        // to app.on laga ke kyi sare events ko listen kr skta hai un events main se ek event hai error event 
      console.log("ERROR:", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
    throw error;
  }
})();
*/
