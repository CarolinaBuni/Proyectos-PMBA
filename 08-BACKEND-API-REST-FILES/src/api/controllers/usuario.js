const { generateSign } = require( "../../config/jwt" );
const Usuario = require( "../models/usuario" );
const bcrypt = require( "bcrypt" );

//! Get Usuarios
const getUsuarios = async ( req, res, next ) => {
     try {
          const usuarios = await Usuario.find().populate( {
               path: 'eventos',
               populate: [
                    {
                         path: 'comentarios',
                         populate: {
                              path: 'user',
                              model: 'usuarios'
                         }
                    },
                    {
                         path: 'user',
                         model: 'usuarios'
                    }
               ]
          } );
          return res.status( 200 ).json( usuarios );
     } catch ( error ) {
          return res.status( 400 ).json( "Error al obtener los usuarios" );
     }
};


//! Register
const register = async ( req, res, next ) => {
     try {
          const newUsuario = new Usuario( {
               userName: req.body.userName,
               email: req.body.email,
               password: req.body.password,
               rol: req.body.rol || "user"
          } );

          const usuarioDuplicado = await Usuario.findOne( { email: req.body.email } );

          if ( usuarioDuplicado ) {
               return res.status( 400 ).json( "Este usuario ya existe" );
          }

          const usuarioGuardado = await newUsuario.save();
          return res.status( 201 ).json( usuarioGuardado );
     } catch ( error ) {
          return res.status( 400 ).json( error );
     }
};



//! Login
const login = async ( req, res, next ) => {
     try {
          const usuario = await Usuario.findOne( { userName: req.body.userName } );

          if ( usuario ) {
               if ( bcrypt.compareSync( req.body.password, usuario.password ) ) {
                    const token = generateSign( usuario.userName, usuario._id );

                    return res.status( 200 ).json( { usuario, token } );

               } else {
                    return res.status( 400 ).json( "Usuario o contraseña erróneos", error );

               }
          } else {
               return res.status( 400 ).json( "Usuario o contraseña no existe" );
          }
     } catch ( error ) {
          return res.status( 400 ).json( "Usuaro o contraseña incorrectas" );
     }
};



//! PUT Usuarios
const putUsuarios = async ( req, res, next ) => {
     try {
          const { id } = req.params;

          if ( req.usuario.rol !== "admin" && String( req.usuario._id ) !== id ) {
               return res.status( 400 ).json( "Esta acción solo la puede realizar un administrador o el propio usuario a modificar" );
          }

          const newUsuario = new Usuario( req.body );
          const oldUsuario = await Usuario.findById( id );
          newUsuario._id = id;
          newUsuario.rol = "user";
          newUsuario.eventos = [ ...oldUsuario.eventos, ...newUsuario.eventos ];

          const usuarioUpdated = await Usuario.findByIdAndUpdate( id, newUsuario, { new: true } );
          return res.status( 200 ).json( usuarioUpdated );
     } catch ( error ) {
          return res.status( 400 ).json( error );
     }
};

module.exports = { getUsuarios, register, login, putUsuarios };