const dotenv = require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");

const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.route("/")
.get((req, res) => {
    res.render("index");
});

app.listen(port, () => {
    console.log("Listening to port " + port);
});