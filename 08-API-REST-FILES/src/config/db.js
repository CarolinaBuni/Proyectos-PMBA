const mongoose = require('mongoose');

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.DB_URL);
          console.log("Conectado a la BBDD");
     } catch (error) {
          console.log("Ha habido un error al conectarse con la BBDD");
     }
};

module.exports = { connectDB };