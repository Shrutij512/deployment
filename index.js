const express = require('express');
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const NAME = process.env.NAME;

app.use(express.json());

app.get("/", (req, res) => {
    res.send(`Welcome , this api is built by ${NAME}`);
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