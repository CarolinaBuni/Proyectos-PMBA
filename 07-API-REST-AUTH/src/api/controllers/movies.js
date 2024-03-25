const Movie = require( "../models/movies" );

//! GET MOVIES
const getMovies = async ( req, res, next ) => {
     try {
          const movies = await Movie.find().populate("director");
          return res.status(200).json(movies);
     } catch (error) {
          return res.status(400).json("Error al hacer el get de las Movies", error)
     }
};


//! GET MOVIES BY ID
const getMoviesByID = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const movieById = await Movie.findById(id);

          return res.status(200).json(movieById);
     } catch (error) {
          return res.status(400).json("Error al hacer el get by ID de las Movies", error)
     }
};


//! GET MOVIES BY TITLE
const getMoviesByTitle = async ( req, res, next ) => {
     try {
          const { title } = req.params;
          const movieByTitle = await Movie.find({ title });

          return res.status(200).json(movieByTitle);
     } catch (error) {
          return res.status(400).json("Error al hacer el get by TITLE de las Movies", error)
     }
};


//! GET MOVIES BY GENRE
const getMoviesByGenre = async ( req, res, next ) => {
     try {
          const { genre } = req.params;
          const movieByGenre = await Movie.find({ genre });

          return res.status(200).json(movieByGenre);
     } catch (error) {
          return res.status(400).json("Error al hacer el get by GENRE de las Movies", error)
     }
};


//! GET MOVIES BY YEAR (MAYOR QUE)
const getMoviesByYear = async ( req, res, next ) => {
     try {
          const { releaseYear } = req.params;
          const movieByYear = await Movie.find({ releaseYear: {$gte: releaseYear}});

          return res.status(200).json(movieByYear);
     } catch (error) {
          return res.status(400).json("Error al hacer el get by YEAR de las Movies", error)
     }
};


//! POST MOVIES
const postMovies = async ( req, res, next ) => {
     try {
          const movie = new Movie(req.body);

          if(req.user.rol === "admin"){
               const movieSaved = await movie.save();
               return res.status(200).json(movieSaved);
          }
     } catch (error) {
          return res.status(400).json("NO estás autorizado, solo los admin tiene permitida esta acción")
     }
};


//! PUT MOVIES
const putMovies = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const newMovie = new Movie(req.body);

          newMovie._id = id;

          const movieUpdated = await Movie.findByIdAndUpdate(id, newMovie, { new: true });

          return res.status(200).json(movieUpdated);
     } catch (error) {
          return res.status(400).json("Error al hacer el put de las Movies", error)
     }
};


//! DELETE MOVIES
const deleteMovies = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const movieDeleted = await Movie.findByIdAndDelete(id);

          return res.status(200).json(movieDeleted);
     } catch (error) {
          return res.status(400).json("Error al hacer el delete de las Movies", error)
     }
}

module.exports = { getMovies, postMovies, putMovies, deleteMovies, getMoviesByID, getMoviesByTitle, getMoviesByGenre, getMoviesByYear };