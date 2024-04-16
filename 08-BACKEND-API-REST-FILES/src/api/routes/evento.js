const { isAuth, isAdmin } = require( "../../middlewares/auth" );
const upload = require( "../../middlewares/file" );
const { getEvents, postEvents, deleteEvents, getEventsByID, getEventsByTitle } = require( "../controllers/evento" );

const eventsRoutes = require("express").Router();

eventsRoutes.get("/", getEvents);
eventsRoutes.get("/:id",isAuth, getEventsByID);
eventsRoutes.get("/title/:title", isAuth, getEventsByTitle);
eventsRoutes.post("/", [isAuth], upload.fields([{ name: "img" }]) , postEvents);
eventsRoutes.delete("/:id",[isAdmin], deleteEvents);

module.exports = eventsRoutes;

