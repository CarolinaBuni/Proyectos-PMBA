require("dotenv").config();
const express = require('express');
const { connectDB } = require( "./src/config/db" );
const router = require( "./src/utils/apiRoutes" );
const cloudinary = require("cloudinary").v2;
const cors = require("cors");

const app = express();



connectDB();

cloudinary.config({
     cloud_name: process.env.CLOUD_NAME,
     api_key: process.env.API_KEY,
     api_secret: process.env.API_SECRET
});


app.use(cors());

app.use(express.json());


app.use("/api/v1", router);


app.use("*", ( req, res, next ) => {
     return res.status(404).json("Route not found");
});

app.listen(3000, () => {
     console.log("http://localhost:3000");
});