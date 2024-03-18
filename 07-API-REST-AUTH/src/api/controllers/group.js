const Group = require( "../models/group" );

//? GET Groups
const getGroups = async (req, res, next) => {
     try {
          const groups = await Group.find();
          return res.status(200).json(groups);
     } catch (error) {
          return res.status(400).json(error);
     }
};

module.exports = { getGroups };