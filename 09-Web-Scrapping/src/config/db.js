const mongoose = require("mongoose");

const connectDB = async () => {
     try {
          await mongoose.connect(process.env.DB_URL);
          console.log("Conectado a la BBDD");
     } catch (error) {
          console.log("No se ha podido establecer la coneción con la BBDD");
     }
};

module.exports = { connectDB };