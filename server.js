const express = require("express");
// const session = require("express-session");
const mongoose = require("mongoose");

// Load in Passport
// const passport = require("./config/passport");

// Setup the express app.
const app = express();
const PORT = process.env.PORT || 8080;

// Grab our models to sync.
// const db = require("./models");

// Set up the express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static("public"));

// Setup the database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/chalker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Set Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Use sessions to keep track of our users login status.
// app.use(
//   session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
// app.use(require("./routes/api.js"));
// membersRouter(app);
// require("./routes/html-routes")(app);
// require("./routes/api-routes")(app);
// require("./routes/tournament-routes")(app);
// require("./routes/member-api-routes.js")(app);
// require("./routes/gametype-api-routes.js")(app);
// require("./routes/game-api-routes.js")(app);

// Sync the sequelize models and then start the express app.
// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(`:) Chalker is running on http://localhost:${PORT}`);
//   });
// });

app.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}!`);
});
