import Userservices from "../database/services/userservice";
import Responses from "../helpers/response";

class Authorization{
 static async allAcess(req,res){
              const allPost = await Userservices.allPosts(req.user);
        return Responses.handleSuccess(200, "Success", allPost, res);
     }
    
static async singlePost(req,res){
    const onePost = await Userservices.onePost(req.params.id);
    return Responses.handleSuccess(200, "Success", onePost, res);
}
static async singlePostDelete(req, res){
    console.log(req.params.id)
    const onePost = await Userservices.oneDelete(req.params.id);
    return Responses.handleSuccess(200, "Success", onePost, res);
}
static async updatePost(req, res){
    const {post} = req.params;
    console.log(req.params);
    const onePost = await Userservices.updatePost(post, req.params.id);
    return Responses.handleSuccess(200, "Success", onePost, res);
}
static async createPost(req, res){
    const {post_id,poster, title, description} = req.body;
    const post = {post_id,poster, title, description,user_id: req.user}
    console.log(req.body)
     const onePost = await Userservices.createPost(post);
    return Responses.handleSuccess(200, "Successfully created", onePost, res);
}
}
export default Authorization;