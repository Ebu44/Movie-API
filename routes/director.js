const express = require("express");
const router = express.Router();

const Director = require("../models/Director");

router.post("/", () => {
  const director = new Director(req.body);
  const promise = director.save();

  promise
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});
