const { isAdmin } = require( "../../middlewares/auth" );
const { getDirectors, postDirectors, putDirectors, deleteDirectors, getDirectorsByName, getDirectorsByID } = require( "../controllers/directors" );

const directorsRoutes = require("express").Router();

directorsRoutes.get("/", getDirectors);
directorsRoutes.get("/:id", getDirectorsByID);
directorsRoutes.get("/name/:name", getDirectorsByName);
directorsRoutes.post("/", [isAdmin], postDirectors);
directorsRoutes.put("/:id", [isAdmin], putDirectors);
directorsRoutes.delete("/:id", [isAdmin], deleteDirectors);


module.exports = directorsRoutes;