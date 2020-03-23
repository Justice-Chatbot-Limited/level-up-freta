import jwt from "jsonwebtoken";
import config from "../database/config/auth.config";
import db from "../database/models";
import { verify } from "jsonwebtoken";
const Users = db.users;

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }
    jwt.verify(token, config.secret, (err, decode) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorize!"
            });
        }
        req.userId = decode.id;
        next();
    });
};
module.exports = verifyToken;