const express = require('express');

// Add routers here

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

// Invoke the routes here.

// Sync the sequelize models and then start the express app.
db.sequelize.sync({ force: true }).then(() => {
	app.listen(PORT, () => console.log(`Chalker is running on PORT ${PORT}`));
});