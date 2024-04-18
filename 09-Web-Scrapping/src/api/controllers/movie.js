const Movie = require( "../models/movie" );
const movies = require("../../../movies.json");


const insertMovies = async (req, res, next) => {
     try {
          await Movie.insertMany(movies);
          return res.status(201).json("Se han subido todo las películas a la BBDD");
     } catch (error) {
          
     }
};

const getMovies = async ( req, res, next ) => {
     try {
          const movies = await Movie.find();
          return res.status(200).json(movies);
     } catch (error) {
          return res.status(400).json(error)
     }
};

module.exports = { getMovies, insertMovies };