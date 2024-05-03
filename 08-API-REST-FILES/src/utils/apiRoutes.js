const express = require("express");
const memesRouter = require( "../api/routes/meme" );

const router = express.Router();

router.use("/memes", memesRouter);

module.exports = router;