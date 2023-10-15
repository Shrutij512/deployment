const express = require('express');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Base API endpoint");
});

app.get("/blogs", (req, res) => {
    res.send("Here are some blogs...");
});

app.get("/users", (req, res) => {
    res.send("Here are the users...");
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});