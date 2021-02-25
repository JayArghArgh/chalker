const express = require('express');

// Add routers here
// const membersRouter = require('./routes/member-api-routes.js')

// Setup the express app.
const app = express();
const PORT = process.env.PORT || 8080;

// Grab our models to sync.
const db = require('./models');

// Set up the express app to handle data parsing
app.use(express.urlencoded( { extended: true }));
app.use(express.json());

// Static Directory
app.use(express.static( 'public' ));

// Set Handflebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Invoke the routes here.
// membersRouter(app);
require("./routes/member-api-routes.js")(app);

// Sync the sequelize models and then start the express app.
db.sequelize.sync().then(() => {
// db.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => console.log(`Chalker is running on PORT ${PORT}`));
});