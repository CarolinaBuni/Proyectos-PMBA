const { isAuth } = require( "../../middlewares/auth" );
const { getUsuarios, register, login, putUsuarios } = require( "../controllers/usuario" );

const usuariosRoutes = require("express").Router();

usuariosRoutes.get("/",[isAuth], getUsuarios);
usuariosRoutes.post("/register", register);
usuariosRoutes.post("/login", login);
usuariosRoutes.put("/:id", [isAuth], putUsuarios);

module.exports = usuariosRoutes;

