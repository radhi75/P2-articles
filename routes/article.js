const express = require("express");
const {
  Addarticle,
  Getarticles,
  Deletearticles,
  Updatearticles,
} = require("../controlles/article");
const articleRoutes = express.Router();

articleRoutes.post("/add", Addarticle);
articleRoutes.get("/get", Getarticles);
articleRoutes.delete("/del/:id", Deletearticles);
articleRoutes.put("/put/:id", Updatearticles);

module.exports = articleRoutes;
