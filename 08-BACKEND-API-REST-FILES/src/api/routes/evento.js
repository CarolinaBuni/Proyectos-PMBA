const { isAuth, isAdmin } = require( "../../middlewares/auth" );
const upload = require( "../../middlewares/file" );
const { getEvents, postEvents, deleteEvents } = require( "../controllers/evento" );

const eventsRoutes = require("express").Router();

eventsRoutes.get("/", getEvents);
eventsRoutes.post("/", [isAuth], upload.fields([{ name: "img" }]) , postEvents);
eventsRoutes.delete("/:id",[isAdmin], deleteEvents);

module.exports = eventsRoutes;

