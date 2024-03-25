const { isAdmin } = require( "../../middlewares/auth" );
const { getMovies, postMovies, putMovies, deleteMovies, getMoviesByID, getMoviesByTitle, getMoviesByGenre, getMoviesByYear } = require( "../controllers/movies" );

const moviesRoutes = require("express").Router();

moviesRoutes.get("/", getMovies);
moviesRoutes.get("/:id", getMoviesByID);
moviesRoutes.get("/title/:title", getMoviesByTitle);
moviesRoutes.get("/genre/:genre", getMoviesByGenre);
moviesRoutes.get("/releaseYear/:releaseYear", getMoviesByYear)
moviesRoutes.post("/", [isAdmin], postMovies);
moviesRoutes.put("/:id", [isAdmin], putMovies);
moviesRoutes.delete("/:id", [isAdmin], deleteMovies);



module.exports = moviesRoutes;