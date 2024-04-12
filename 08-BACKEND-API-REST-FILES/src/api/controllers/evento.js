const { deleteFile } = require( "../../utils/deleteFile" );
const Event = require( "../models/evento" );
const Usuario = require( "../models/usuario" );

//! GET Events
const getEvents = async ( req, res, next ) => {
     try {
          const allEvents = await Event.find().populate("user").populate({
               path: "comentarios",
               model: "comments"
          });
          return res.status(200).json( allEvents );
     } catch (error) {
          return res.status(400).json(error);
     }
};


//! POST Events
const postEvents = async ( req, res, next ) => {
     try {
          console.log(req.body);
          const event = new Event({
               ...req.body,
               user: req.body.user, // Asume que el ID del usuario viene en la solicitud
           });

          if (req.files){
               event.img = req.files.img[0].path;
          }

          const eventSaved = await event.save();


         await Usuario.findByIdAndUpdate(
          req.body.user,
          { $push: { eventos: eventSaved._id } },
          { new: true }  
      );
          return res.status(200).json( eventSaved );
     } catch (error) {
    return res.status(500).json({ message: "Error al actualizar el usuario" });
     }
};


//! DELETE Events
const deleteEvents = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const eventDeleted = await Event.findByIdAndDelete(id);
          deleteFile(eventDeleted.img);

          return res.status(200).json(eventDeleted);
     } catch (error) {
          return res.status(400).json("Ha fallado la eliminación del evento");
     }
}

module.exports = { getEvents, postEvents, deleteEvents };