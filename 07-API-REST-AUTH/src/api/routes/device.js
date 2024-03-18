const { getDevices, postDevices, putDevices, deleteDevices } = require( "../controllers/device" );

const devicesRoutes = require("express").Router();

devicesRoutes.get("/", getDevices);
devicesRoutes.post("/", postDevices);
devicesRoutes.put("/:id", putDevices);
devicesRoutes.delete("/:id", deleteDevices);

module.exports = devicesRoutes;