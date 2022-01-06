require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../build")));

app.get("/api", async (req, res) => {
    const text = "https://www.affirmations.dev";
    const response = await axios.get(text); 
    const result = response.data.affirmation;
    res.json(result);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});

