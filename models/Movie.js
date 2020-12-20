const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
  director_id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, "`{PATH} alanı zorunludur`"],
    maxlength: [
      15,
      "`{PATH}` alanı (`{VALUE}`), (15) karakterden küçük olmalı",
    ],
    minlength: [4, "`{PATH}` alanı (`{VALUE}`), (4) karakterden büyük olmalı"],
  },
  category: {
    type: String,
    maxlength: 30,
    minlength: 1,
  },
  country: {
    type: String,
    maxlength: 30,
    minlength: 1,
  },
  year: {
    type: Number,
    maxlength: 3000,
    minlength: 1500,
  },
  imdb_score: {
    type: Number,
    max: 10,
    min: 0,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("movies", MovieSchema);
