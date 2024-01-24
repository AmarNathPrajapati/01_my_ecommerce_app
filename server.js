import express from 'express'
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoute.js";


//configure env
dotenv.config();

//connecting database
connectDB();

//rest object
const app = express()

//middelwares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v1/auth", authRoutes);

//PORT
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(
    `Server Running on mode on ${process.env.DEV_MODE} at port  http://localhost:${PORT}`.bgBlack.white
  );
}) 