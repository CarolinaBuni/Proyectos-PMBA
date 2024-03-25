const { isAuth } = require( "../../middlewares/auth" );
const { getUsers, register, login, putUsers, deleteUser, getUserByID } = require( "../controllers/users" );

const usersRoutes = require("express").Router();

usersRoutes.get("/", [isAuth], getUsers);
usersRoutes.get("/:id", [isAuth], getUserByID);
usersRoutes.post("/register", register);
usersRoutes.post("/login", login);
usersRoutes.put("/:id", putUsers);
usersRoutes.delete("/:id", deleteUser);



module.exports = usersRoutes;

