"use strict";

const siteNews = [
  {
    title: "item1",
    article: "article1"
  },
  {
    title: "item2",
    article: "article2"
  },
  {
    title: "item3",
    article: "article3"
  }
];

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("index", {
      data: siteNews
    });
  });
};
