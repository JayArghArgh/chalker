"use strict";

const db = require("../models");

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index");
  });
  // /tournament/ own route.
  app.get("/match/:matchNo?", (req, res) => {
    res.render("match");
  });
  app.get("/set/:setNo?", (req, res) => {
    res.render("set");
  });
  app.get("/leg/:legNo?", (req, res) => {
    res.render("leg");
  });
};
