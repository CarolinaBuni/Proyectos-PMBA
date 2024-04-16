const Comment = require( "../models/comentario" );
const Event = require( "../models/evento" );
const Usuario = require( "../models/usuario" );

//! GET Comments (Este controlador no lo necesito en la aplicación en sí pero lo tengo para hacer pruebas)
const getComments = async ( req, res, next ) => {
     try {
          const allComments = await Comment.find().populate( {
               path: 'event',
               populate: {
                    path: 'comentarios',
                    populate: {
                         path: 'user',
                         model: 'usuarios'
                    }
               }
          } ).populate( 'user' );
          return res.status( 200 ).json( allComments );
     } catch ( error ) {
          return res.status( 400 ).json( error );
     }
};


//! POST Comments
const postComments = async ( req, res, next ) => {
     try {
          const comment = new Comment( {
               ...req.body,
               event: req.body.event,
               user: req.body.user
          } );

          const commentSaved = await comment.save();

          await Event.findByIdAndUpdate( req.body.event, { $push: { comentarios: commentSaved._id } } );

          await Usuario.findByIdAndUpdate( req.body.user, { $push: { comentarios: commentSaved._id } } );
          return res.status( 200 ).json( commentSaved );
     } catch ( error ) {
          return res.status( 400 ).json( error );
     }
};


//! PUT Comments
const putComments = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const newComentario = new Comment( req.body );
          newComentario._id = id;

          const comentarioUpdated = await Comment.findByIdAndUpdate( id, newComentario, { new: true } );
          return res.status( 200 ).json( comentarioUpdated );
     } catch ( error ) {
          return res.status( 400 ).json( error );
     }
};


//! DELETE Comments
const deleteComments = async ( req, res, next ) => {
     try {
          const { id } = req.params;

          const commentDeleted = await Comment.findByIdAndDelete( id, { new: true } );
          return res.status( 200 ).json( commentDeleted );
     } catch ( error ) {
          return res.status( 400 ).json( "Esta acción solo la puede realizar un administrador o el propietario del comentario" );
     }

};

module.exports = { getComments, postComments, putComments, deleteComments };