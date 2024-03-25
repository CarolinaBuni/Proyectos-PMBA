const express = require('express');
const moviesRoutes = require( '../api/routes/movies' );
const directorsRoutes = require( '../api/routes/directors' );
const usersRoutes = require( '../api/routes/users' );

const router = express.Router();

router.use("/movies", moviesRoutes);
router.use("/directors", directorsRoutes);
router.use("/users", usersRoutes);

module.exports = router;

