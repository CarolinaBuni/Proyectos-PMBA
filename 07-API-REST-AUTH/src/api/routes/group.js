const { getGroups } = require( "../controllers/group" );

const groupsRoutes = require("express").Router();

groupsRoutes.get("/", getGroups);

module.exports = groupsRoutes;