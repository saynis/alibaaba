import express from 'express'
const app = express();

import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

app.use(express.json())

const corsOptions = {
    origin: 'https://alibaabawebsite.onrender.com', // URL-ka saxda ah ee frontend-ka
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: [
      "Content-Type",
    ],
    credentials: true,
};
  
app.use(cors(corsOptions));

import userRoute from '../routes/userRoute.js'
app.use("/api/users/" , userRoute)

import productsRoute from '../routes/productsRoute.js'
app.use("/api/products/", productsRoute)

const port = process.env.PORT || 6000;
app.listen(port, () => console.log(`http://localhost:${port}`));