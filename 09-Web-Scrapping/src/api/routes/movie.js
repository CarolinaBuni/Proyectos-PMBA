const { getMovies, insertMovies } = require( "../controllers/movie" );

const moviesRouter = require("express").Router();

moviesRouter.get("/", getMovies);
moviesRouter.post("/insertarMovies", insertMovies);

module.exports = moviesRouter;