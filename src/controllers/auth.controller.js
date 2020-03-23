import db from "../database/models";
import config from "../database/config/auth.config";
const Users = db.users;
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

exports.signup = (req, res) => {
    console.log(req.body);
    Users.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
        res.status(201).send({
            id: user.id,
            email: user.email,
            username: user.username,
            accessToken: jwt.sign({id:user.id}, config.secret, {expiresIn: 86400 })
            });
    }).catch(err => {
        res.status(500).send({
            message: err.message
        });
    });
};


exports.signin = (req, res) => {
    Users.findOne({
        where :{
            username: req.body.username
        }
    }).then(user => {
        if(!user){
          return res.status(404).send({
                message: "user Not Found"
            });
        }
        let passwordIsValid = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if(!passwordIsValid) {
          return res.status(401).send({
                accessToken: null,
                message: "Invalid Password!"
            });
        }
        let token = jwt.sign({id:user.id}, config.secret, {expiresIn: 86400 });   
        res.status(200).send({
            id: user.id,
            username: user.username,
            accessToken: token
        });
    }).catch(err=> {
        res.status(500).send({
            message: err.message
        });
    });
};