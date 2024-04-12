const { isAuth, isAdmin } = require( "../../middlewares/auth" );
const { getComments, postComments, putComments, deleteComments } = require( "../controllers/comentario" );

const commentsRoutes = require("express").Router();

commentsRoutes.get("/", getComments);
commentsRoutes.post("/", [isAuth], postComments);
commentsRoutes.put("/:id", [isAuth], putComments);
commentsRoutes.delete("/:id", [isAdmin], deleteComments);

module.exports = commentsRoutes;