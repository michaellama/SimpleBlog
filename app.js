//jshint eservices:6

const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res) {
    res.render("index");
});

app.get("/about", function(req, res) {
    res.render("about");
});

app.get("/support", function(req, res) {
    res.render("support");
});


app.listen("3000", function() {
    console.log("Server is ready to work on port 3000");
});