const Usuario = require( "../api/models/usuario" );
const { verifyJwt } = require( "../config/jwt" );

const isAuth = async ( req, res, next ) => {
     try {
          const token = req.headers.authorization;
          const parsedToken = token.replace("Bearer ", "");

          const { id } = verifyJwt(parsedToken);

          const usuario = await Usuario.findById(id);

          usuario.password = null;
          req.usuario = usuario;
          next();
     } catch (error) {
          return res.status(401).json("No estás autorizado")
     }
};


const isAdmin = ( req, res, next ) => {
     
          if(req.usuario.rol === "admin"){
               next();
          } else {
               return res.status(401).json("No estás autorizado")
          }
};


module.exports = { isAuth, isAdmin };