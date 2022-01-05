const express = require("express");
const app = express();
const db = require("./knexfile");

app.use(express.json());

module.exports = app;
