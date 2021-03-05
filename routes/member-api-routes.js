"use strict";
// https://medium.com/@vivian_48490/how-to-get-full-advantage-of-handlebars-using-sequelize-express-mvc-bab17e59bceb
const db = require("../models");

module.exports = app => {
  app.get("/members", (req, res) => {
    db.User.findAll({}).then(dbMembers => {
      res.render("member", {
        data: dbMembers.map(member => member.toJSON())
      });
    });
  });
};

//https://www.codegrepper.com/code-examples/javascript/Options+to+control+prototype+access
