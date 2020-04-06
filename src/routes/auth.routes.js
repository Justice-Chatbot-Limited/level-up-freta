import checkUsername from "../middlewares/verifysignup";
import Authcontroller from "../controllers/auth.controller";
import express from "express";
const router = express.Router();
router.use((req, res, next) => {
    res.header("Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    );
    next();
});

router.post("/auth/signup", checkUsername, Authcontroller.signUp);
router.post("/auth/signin", Authcontroller.signIn);
module.exports = router;
