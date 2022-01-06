require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const path = require("path");

app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());
app.use(cors());


app.get("/api", async (req, res) => {
    const text = "https://www.affirmations.dev";
    const response = await axios.get(text); 
    const result = response.data.affirmation;
    res.json(result);
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`server listening on ${port}`);
});

