const upload = require( "../../middlewares/file" );
const { getMemes, postMemes, deleteMemes } = require( "../controllers/meme" );

const memesRouter = require("express").Router();

memesRouter.get("/", getMemes);
memesRouter.post("/", upload.fields([{ name: "img"}]) ,postMemes);
memesRouter.delete("/:id", deleteMemes);


module.exports = memesRouter;