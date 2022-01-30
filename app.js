// Require Express
const express = require('express');

// Express server handling requests and responses
const app = express();

// Make everything inside of public/ available
app.use(express.static('public'));

// home route:
//app.get('/home', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));

// about route:
//app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));

// works route:
//app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// photo gallery route:
//app.get('/photo-gallery', (request, response, next) => response.sendFile(__dirname + '/views/photo-gallery.html'));

// creates an absolute path pointing to a folder called "views"
app.set("views", __dirname + "/views");

//tell our Express app that HBS will be in charge of rendering the HTML
app.set("view engine", "hbs");

// send views/index.hbs for displaying in the browser
app.get("/", (req, res, next) => res.render("index"));

// Server Started
app.listen(3000, () => console.log('Server up and running on port 3000!'));
