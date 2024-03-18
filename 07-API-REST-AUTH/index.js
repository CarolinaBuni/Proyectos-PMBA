require("dotenv").config();

const express = require("express");
const { connectDB } = require( "./src/config/db" );
const usersRoutes = require( "./src/api/routes/user" );
const devicesRoutes = require( "./src/api/routes/device" );
const groupsRoutes = require( "./src/api/routes/group" );

const app = express();

connectDB();

app.use(express.json());

app.use("/api/v1/users", usersRoutes);
app.use("/api/v1/devices", devicesRoutes);
app.use("/api/v1/groups", groupsRoutes);






app.use("*", (req, res, next) => {
     return res.status(400).json("Route not found")
})
app.listen(3000, () => {
     console.log("http://localhost:3000");
});