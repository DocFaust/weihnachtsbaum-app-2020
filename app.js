const dotenv = require("dotenv").config();
const express = require("express");
const ejs = require("ejs");
const bodyParser = require("body-parser");
const PresentProvider = require("./presents").PresentProvider;
const presentProvider = new PresentProvider();

const app = express();

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.route("/")
.get(async (req, res) => {
//    await presentProvider.create("Ball", "Blauer Plastikball", "/ball.jpg")
    const presents = await presentProvider.findAll()
    console.log(presents);
    res.render("index", {presentList: presents});
});

app.listen(port, () => {
    console.log("Listening to port " + port);
});