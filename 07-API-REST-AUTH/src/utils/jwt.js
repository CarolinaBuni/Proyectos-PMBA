const jwt = require("jsonwebtoken");

//! Crear llave
const generateSign = (userName, id) => {
     return jwt.sign({ userName, id }, process.env.JWT_SECRET, { expiresIn: "30d"});
};

//! Comprobar si esa llave fue creada por el cerrajero de confianza
const verifyJwt = (token) => {
     return jwt.verify(token, process.env.JWT_SECRET);
}




module.exports = { generateSign, verifyJwt };
