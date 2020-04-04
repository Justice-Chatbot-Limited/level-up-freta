import checkUsername from "../middlewares/verifysignup";
import controller from "../controllers/auth.controller";
import express from "express";
const router = express.Router();

 router.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
  
    router.post("/auth/signup",checkUsername, controller.signup);
    router.post("/auth/signin", controller.signin);
module.exports = router;