const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema(
     {
          img: { type: String, required: true },
          title: { type: String, required: true },
          director: { type: String, required: true }
     },
     {
          timestamps: true,
          collection: "movies"
     }
);

const Movie = mongoose.model("movies", movieSchema, "movies");

module.exports = Movie;