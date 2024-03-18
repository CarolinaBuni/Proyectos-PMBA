const { isAuth } = require( "../../middlewares/auth" );
const { getUsers, register, putUsers, deleteUsers, login } = require( "../controllers/user" );

const usersRoutes = require("express").Router();

usersRoutes.get("/", [isAuth], getUsers);
usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.put("/:id", putUsers);
usersRoutes.delete("/:id", deleteUsers);


module.exports = usersRoutes;


