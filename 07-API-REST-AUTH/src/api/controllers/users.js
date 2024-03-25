const { generateSign } = require( "../../config/jwt" );
const User = require( "../models/users" );
const bcrypt = require("bcrypt");

//! GET USERS
const getUsers = async (req, res, next) => {
     try {
          const users = await User.find().populate({
               path: 'favoritesMovies', // Primero popular 'favoritesMovies'
               populate: {
                   path: 'director', // Dentro de cada 'favoritesMovies', popular 'director'
                   model: 'directors' // Especifica el modelo 'Director' para la población
               }
           });;
          return res.status(200).json(users);
     } catch (error) {
          return res.status(400).json(error);
     }
};



//! GET USERS BY ID
const getUserByID = async ( req, res, next ) => {
     try {
          const { id } = req.params;

          const userById = await User.findById(id);
          return res.status(200).json(userById);
     } catch (error) {
          return res.status(400).json(error);
     }
};


//! REGISTER USERS
const register = async ( req, res, next ) => {
     try {
          const newUser = new User({
               name: req.body.name,
               password: req.body.password,
               userName: req.body.userName
          });

          const userDuplicated = await User.findOne({ userName: req.body.userName });

          if (userDuplicated){
               return res.status(400).json("Este usuario ya existe");
          }

          const userSaved = await newUser.save();
          return res.status(200).json(userSaved)
     } catch (error) {
          return res.status(400).json(error);
     }
};


//! LOGIN USERS
const login = async (req, res, next) => {
     try {
          const user = await User.findOne({ userName: req.body.userName });
          if (user){
               if(bcrypt.compareSync(req.body.password, user.password)){
                    const token = generateSign(user.userName, user._id);
                    return res.status(200).json({ user, token });
               } else {
                    return res.status(400).json("Usuario o contraseña erróneos")
               }
          } else {
               return res.status(400).json("Usuario o contraseña no existe")
          }
     } catch (error) {
          return res.status(400).json(error);
     }
};


//! PUT USERS
const putUsers = async ( req, res, next ) => {
     try {
          const { id } = req.params;

          const oldUser = await User.findById(id);
          const newUser = new User(req.body);

          newUser._id = id;

          const updateData = req.body;

          if(oldUser.favoritesMovies && updateData.favoritesMovies ){
               newUser.favoritesMovies = [...oldUser.favoritesMovies, ...req.body.favoritesMovies];
          }

          const userUpdated = await User.findByIdAndUpdate(id, newUser, { new: true });
          return res.status(200).json(userUpdated);
          
     } catch (error) {
          return res.status(400).json(error);
     }
};


//! DELETE USERS
const deleteUser = async ( req, res, next ) => {
     try {
          const { id } = req.params;

          const userDeleted = await User.findByIdAndDelete(id);

          return res.status(200).json(userDeleted);
     } catch (error) {
          return res.status(400).json("Error al hacer el delete de Users",error);
     }
};


module.exports = { getUsers, register, login, putUsers, deleteUser, getUserByID };