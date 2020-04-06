import express from "express";
import * as bodyParser from "body-parser";
import cors from "cors";

require('dotenv').config({ path: ".env" });
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./database/models");
const corsOptions = process.env.CORSOPTION_ORIGIN;
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync();
app.use(require("../src/routes/auth.routes"));
app.use(require("../src/routes/post.routes"))
app.listen(PORT, () => {
});
