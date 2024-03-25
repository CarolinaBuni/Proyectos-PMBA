const Director = require( "../models/directors" );

//! GET DIRECTORS
const getDirectors = async ( req, res, next )=> {
     try {
          const directors = await Director.find();
          return res.status(200).json(directors);
     } catch (error) {
          return res.status(404).json("Ha fallado el GET de los directores", error)
     }
};


//! GET DIRECTORS BY ID
const getDirectorsByID = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const directorsByID = await Director.findById(id);

          return res.status(200).json(directorsByID);
     } catch (error) {
          return res.status(404).json("Ha fallado el GET by ID de los directores", error)
     }
};



//! GET DIRECTORS BY NAME
const getDirectorsByName = async ( req, res, next ) => {
     try {
          const { name } = req.params;
          const directorByName = await Director.find({ name });

          return res.status(200).json(directorByName);
     } catch (error) {
          return res.status(404).json("Ha fallado el GET by title de los directores", error)
     }
};


//! POST DIRECTORS
const postDirectors = async ( req, res, next ) => {
     try {
          const director = new Director(req.body);

          if(req.user.rol === "admin"){
               const directorSaved = await director.save();
               return res.status(200).json(directorSaved);
          }
     } catch (error) {
          return res.status(400).json("No estás autorizado, solo los admin tiene permitida esta acción")}
};


//! PUT DIRECTORS
const putDirectors = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const newDirector = new Director(req.body);

          newDirector._id = id;

          const directorUpdated = await Director.findByIdAndUpdate(id, newDirector, { new: true });
          return res. status(200).json(directorUpdated);
     } catch (error) {
          return res.status(404).json("Ha fallado el PUT de los directores", error)
     }
};


//! DELETE DIRECTORS
const deleteDirectors = async ( req, res, next ) => {
     try {
          const { id } = req.params;
          const directorDeleted = await Director.findByIdAndDelete(id);

          return res.status(200).json(directorDeleted);
     } catch (error) {
          return res.status(404).json("Ha fallado el DELETE de los directores", error)
     }
};

module.exports = { getDirectors, postDirectors, putDirectors, deleteDirectors, getDirectorsByName, getDirectorsByID };