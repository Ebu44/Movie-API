const mongoose = require("mongoose");

module.exports = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connection Succesfull");
    })
    .catch((err) => {
      console.log(err);
    });

  mongoose.Promise = global.Promise;
};
