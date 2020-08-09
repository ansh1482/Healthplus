const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const ejs = require("ejs");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.redirect("/home");
});

app.get("/home", function(req, res) {
  res.render("home.ejs");
});

app.get("/about", function(req, res) {
  res.render("about.ejs");
});

app.get("/contact", function(req, res) {
  res.render("contact.ejs");
});

app.get("/product", function(req, res) {
  res.render("product.ejs");
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Server started...");
})
