const mongoose = require('mongoose');

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.DB_URL);
          console.log("Conectado con éxito a la BBDD");
     } catch (error) {
          console.log("Ha habido un error conectando con la BBDD");
     }
};

module.exports = { connectDB }