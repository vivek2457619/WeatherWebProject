const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
// for hosting : const port = process.env.PORT || 8000;
const port = 8000;

// to run static website we define path and use in express   
const static_Path = path.join(__dirname, "../public");
// use hbs in express to run views folder 
app.set('view engine', 'hbs');
app.use(express.static(static_Path));

// to use template folder 
const template_path = path.join(__dirname, "../templates/views");
app.set('views', template_path);

// to use partials 
const partials_path = path.join(__dirname, "../templates/partials");
hbs.registerPartials(partials_path);

 //routing : route, callback
 app.get("", (req, res) => {
    res.render('index');
 });
 app.get("/about", (req, res) => {
    res.render('about');
 });
 app.get("/weather", (req, res) => {
     res.render('weather');
 });
 app.get("*", (req, res) => {
    res.render('404error', {
      // props 
      errorMsg: 'Opps! Page Not Found, Pls Go Back'
    });
 });
 app.listen(port, () => {
    console.log(`listening to the port at ${port}`)
 });