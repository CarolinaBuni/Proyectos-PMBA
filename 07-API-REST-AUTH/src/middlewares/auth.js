const User = require( "../api/models/user" );
const { verifyJwt } = require( "../utils/jwt" );

const isAuth = async (req, res, next) => {
     try {
          const token = req.headers.authorization; 

          if(!token){
               return res.status(401).json("No estás autorizado");
          }
          const parsedToken = token.replace("Bearer ", "");
          const { id } = verifyJwt(parsedToken);
          
          const user = await User.findById(id);
          user.password = null;
          req.user = user;
          next();

     } catch (error) {
          return res.status(401).json("Algo pasa y No estás autorizado")
     }
};

module.exports = { isAuth };