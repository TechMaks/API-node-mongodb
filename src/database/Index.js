const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://maxsantos:12345@api-mongo.rjwpld0.mongodb.net/api-mongo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Conexão com o MongoDB estabelecida com sucesso");
  })
  .catch((error) => {
    console.error("Falha ao autenticar no MongoDB:");
    console.error(error);
  });

mongoose.Promise = global.Promise;

module.exports = mongoose;
