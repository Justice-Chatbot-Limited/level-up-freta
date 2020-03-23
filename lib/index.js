/* eslint-disable linebreak-style */
import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

const app = express();
const corsOptions = {
origin : 'https://localhost:8081'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("../src/database/models");
db.sequelize.sync();
app.get("/", (req, res) => {
  res.json({ message: "Welcome to level-up application." });
});
require("../src/routes/auth.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server is running");
});
