const mongoose = require("mongoose");

const dbConection = async () => {
  try {

    mongoose.connect(process.env.DB_CNN);

    console.log("DB online")

  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar la base de datos");
    
  }
};

module.exports = {
  dbConection,
}