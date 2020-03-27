/*import jwt from "jsonwebtoken";
// import db from "../database/models";
// const Users = db.users;
class Jwtservices {
     token = authHeader.split(' ')[1];
verifyToken (data) {
    if(typeof data !== 'undefined'){
           try{
            jwt.verify(token, 'process.env.JWT_SECRET_KEY', (err, decode) => {
                return decode.id;
                });
            } catch (err) { return res.status(401).send({
            message: "Unauthorize!"
        }); 
    }
   }
}
generateToken(config){
    jwt.sign(config,'process.env.JWT_SECRET_KEY',{expiresIn: 86400},(err,token)=>{
        if(err){
            console.log(err);
        }
        return token;
        });
}

}
exports.default = Jwtservices;*/