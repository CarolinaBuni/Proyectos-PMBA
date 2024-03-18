const { generateSign } = require( "../../utils/jwt" );
const User = require( "../models/user" );
const bcrypt = require("bcrypt")

//! GET USERS
const getUsers = async (req, res, next) => {
     try {
          const users = await User.find().populate("devices");
          return res.status(200).json(users);
     } catch (error) {
          return res.status(400).json("Error al hacer el get de usuarios")
     }
};


//! PUT USERS
const putUsers = async (req, res, next) => {
     try {
          const { id } = req.params;
          const newUser = new User(req.body);
          newUser._id = id;

          const userUpdated = await User.findByIdAndUpdate(id, newUser, {
               new: true,
          });
          return res.status(200).json(userUpdated);
     } catch (error) {
          return res.status(400).json("Error al modificar usuarios")
     }
};


//! DELETE USERS
const deleteUsers = async (req, res, next) => {
     try {
          const { id } = req.params;
          const userDeleted = await User.findByIdAndDelete(id);
          return res.status(200).json(userDeleted);
     } catch (error) {
          return res.status(400).json("Error al eliminar usuarios")
     }
};



//! REGISTER
const register = async (req, res, next) => {
     try {
          const newUser = new User(req.body);
          const userDuplicated = await User.findOne({ userName: req.body.userName }).populate("device");

          if(userDuplicated) {
               return res.status(400).json("Ese nombre de usuario ya existe");
          }

          // newUser.rol = "user";
          const user = await newUser.save();

          return res.status(201).json(user);
     } catch (error) {
          return res.status(400).json(error)
     }
};


//! LOGIN
const login = async (req, res, next) => {
     try {
          
          const user = await User.findOne({ userName: req.body.userName });
          if(user){
               if (bcrypt.compareSync(req.body.password, user.password)) {
                    //! Lo que pasa cuando te logueas con jsonwebtoken
                    const token = generateSign(user.userName, user._id);
                    return res.status(200).json({ user, token });
               } else {
                    return res.status(400).json("Ese usuario o la contraseña son incorrectos");
               }
          } else {
               return res.status(400).json("Ese usuario o la contraseña son incorrectos");
          }

     } catch (error) {
          return res.status(400).json(error)
     }
};

module.exports = { getUsers, register, putUsers, deleteUsers, login };