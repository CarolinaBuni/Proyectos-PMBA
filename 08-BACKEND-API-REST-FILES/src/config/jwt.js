const jwt = require("jsonwebtoken");

//! Crear llave
const generateSign = (userName, id) => {
     return jwt.sign({ userName, id }, process.env.JWT_SECRET, { expiresIn: "1y" });
};

//! Comprobar que la llave es válida
const verifyJwt = (token) => {
     return jwt.verify(token, process.env.JWT_SECRET);
};

module.exports = { generateSign, verifyJwt }; 