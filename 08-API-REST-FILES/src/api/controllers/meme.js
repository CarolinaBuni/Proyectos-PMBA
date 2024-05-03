const { deleteFile } = require( "../../utils/deleteFile" );
const Meme = require( "../models/meme" );

//! GET MEMES
const getMemes = async ( req, res, next ) => {
     try {
          const memes = await Meme.find();
          return res.status(200).json(memes);
     } catch (error) {
          return res.status(400).json("Error al hacer el GET de los Memes")
     }
};



//! POST MEMES
const postMemes = async ( req, res, next ) => {
     try {
          const newMeme = new Meme(req.body);
          if(req.files) {
               newMeme.img = req.files.img[0].path;
               // newMeme.img2 = req.files.img2[0].path;
               
          }
          const memeSaved = await newMeme.save();
          return res.status(201).json(memeSaved);
     } catch (error) {
          return res.status(400).json("Error al hacer el POST de los Memes")
     }
};

//! DELETE MEMES
const deleteMemes = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const memeDeleted = await Meme.findByIdAndDelete(id);
          deleteFile(memeDeleted.img);

          return res.status(200).json({
               mensaje: "Elemento eliminado",
               memeDeleted
          });
     } catch (error) {
          return res.status(400).json("Error al hacer el DELETE de los Memes")
     }
};


module.exports = { getMemes, postMemes, deleteMemes };
