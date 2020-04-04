/* eslint-disable linebreak-style */
import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";


//import {} from 'dotenv/config';
require('dotenv').config({ path: ".env" });
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./database/models");
//require("./routes/auth.routes")(app);
const corsOptions = {
origin : 'https://localhost:8081'
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync();
app.use(require("../src/routes/auth.routes"));
app.use(require("../src/routes/user.routes"))
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
