const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const moviesSchema = new Schema(
     {
          title: { type: String },
          director: { type: Schema.Types.ObjectId, ref: 'directors' },
          genre: { type: String, required: true, enum: [
               "Action",
               "Adventure",
               "Animation",
               "Biography",
               "Comedy",
               "Crime",
               "Documentary",
               "Drama",
               "Family",
               "Fantasy",
               "History",
               "Horror",
               "Music",
               "Musical",
               "Mystery",
               "Romance",
               "Sci-Fi",
               "Short",
               "Sport",
               "Thriller",
               "War",
               "Western",
          ]},
          releaseYear: { type: Number },
     },
     {
          timestamps: true,
          collection: 'movies',
     }
);

const Movie = mongoose.model('movies', moviesSchema, 'movies');

module.exports = Movie;