const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
app.use(bodyParser.json());
app.use(cors());

const postRoutes = require("./controllers/postsController");

app.use("/posts", postRoutes);

app.get("/", (request, response) => {
  return response.status(200).send("hello world!");
});
app.listen(3001, () => {
  console.log("the app is running on port 3001");
});
