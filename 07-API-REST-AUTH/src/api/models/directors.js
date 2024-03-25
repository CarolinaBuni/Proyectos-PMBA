const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const directorsSchema = new Schema(
     {
          name: { type: String },
          biography: { type: String },
          birthdate: { type: String },
     },
     {
          timestamps: true,
          collection: 'directors',
     }
);

const Director = mongoose.model('directors', directorsSchema,  "directors");

module.exports = Director;