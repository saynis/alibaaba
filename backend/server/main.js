import express from 'express'
const app = express();

import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

app.use(express.json())

const corsOptions = {
    origin: process.env.CLIENT_BASE_URL, // URL-ga frontend-kaaga
    methods: ['GET', 'POST','PUT', 'DELETE'],
    allowedHeaders: [
      "Conten-Type",
    ],
    credentials: true, // Allow credentials (cookies, headers, etc.)
  };
  
  app.use(cors(corsOptions));

import userRoute from '../routes/userRoute.js'
app.use("/api/users/" , userRoute)

import productsRoute from '../routes/productsRoute.js'
app.use("/api/products/", productsRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`http://localhost:${port}`));