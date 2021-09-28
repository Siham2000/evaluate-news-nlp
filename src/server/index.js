const dotenv = require("dotenv");
dotenv.config();
var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");

// const fetch = require("node-fetch");
// create  instance
const app = express();

const cors = require("cors");
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static("dist"));

console.log(__dirname);

app.get("/", function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve("src/client/views/index.html"));
});

// api call
const BASE_URL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
console.log(`Your API Key is ${apiKey}`);
let inputFromUser = {};

app.post("/api", async (req, res) => {
  inputFromUser = req.body.url;
  const fullUrl = `${BASE_URL}key=${apiKey}&url&txt=${inputFromUser}&lang=en`;
  console.log(fullUrl);

  const response = await axios.post(fullUrl);
  const reuslt = await response.data;
  // console.log(reuslt);
  res.send(reuslt);
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("Example app listening on port 8081!");
});
