import express from "express";
import mongoose  from "mongoose";
import dotenv from "dotenv"
import userRoute from './routes/userroute.js'
import authRoute from './routes/authroute.js';
dotenv.config()

mongoose
    .connect(process.env.MONGO)
    .then(() => { 
        console.log('MongoDB Connected');
    })
    .catch((err) => { 
        console.log(err);
    })

const app = express();

app.use(express.json());

app.listen(3000, () => { 
    console.log('Server Connected to port 3000');
});

app.use("/api/user", userRoute);
app.use("/api/auth",authRoute);


app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});