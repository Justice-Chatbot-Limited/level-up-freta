import db from "../database/models";
const Users = db.users;
module.exports.checkDuplicate = (req, res, next) => {
    console.log(req.body);
    Users.findOne({
        where: {username: req.body.username
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Username already in use!"
            });
            return;
        }

        // Email
        Users.findOne({
            where:{
                email: req.body.email
            }
        }).then(user => {
            if(user) {
                res.status(400).send({
                    message: "Email is already in use!"
                });
                return;
            }
           next();
        });
    });
};
