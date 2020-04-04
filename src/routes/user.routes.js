
import Authorization from "../controllers/user.controller";
import checkAuth from "../middlewares/checkauth";
import express from "express";
const router = express.Router();

 router.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });
 
    router.get("/test/all", checkAuth, Authorization.allAcess);
   router.get("/test/:id", checkAuth, Authorization.singlePost);
   router.delete("/test/:id",checkAuth, Authorization.singlePostDelete);
   router.put("/test/:id", checkAuth, Authorization.updatePost);
   router.post("/test", checkAuth, Authorization.createPost);
module.exports = router;