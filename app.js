const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");


process.setMaxListeners(0);

const app = express();

// Port Number
const PORT = 3000;

// CORS Middleware //
app.use(cors());

// https://expressjs.com/en/advanced/best-practice-performance.html
// app.use(compression());

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(bodyParser.json({ limit: 5 * 1024 * 2014 }));


app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
    console.log("gettingg");
    res.sendFile(path.join(__dirname, "public/index.html"));
});

// Connect to databse, then start Server

app.listen(PORT, () => {
    console.log("Listening on port: " + PORT);
});


module.exports = app;
