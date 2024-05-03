const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const memeSchema = new Schema(
     {
          img: { type: String, required: true },
          // img2: { type: String, required: true },
          textoSuperior: { type: String},
          textoInferior: { type: String }
     },
     {
          timestamps: true,
          collection: "memes"
     }
);

const Meme = mongoose.model("memes", memeSchema, "memes");

module.exports = Meme;