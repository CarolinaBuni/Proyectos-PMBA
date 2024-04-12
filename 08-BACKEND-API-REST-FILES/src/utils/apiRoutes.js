const express = require("express");
const usuariosRoutes = require( "../api/routes/usuario" );
const eventsRoutes = require( "../api/routes/evento" );
const commentsRoutes = require( "../api/routes/comentario" );

const router = express.Router();

router.use("/usuarios", usuariosRoutes);
router.use("/eventos", eventsRoutes);
router.use("/comentarios", commentsRoutes);



module.exports = router;
