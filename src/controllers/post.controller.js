import Postservices from "../database/services/postservice";
import Responses from "../helpers/response";

class Authorization {
    static async allAcess(req, res) {
        const allPost = await Postservices.allPosts(req.user);
        return Responses.handleSuccess(200, " ", allPost, res);
    }

    static async singlePost(req, res) {
        const onePost = await Postservices.onePost(req.params.id);
        if (onePost === null) return Responses.handleError(400, "The post is not available", res);
        return Responses.handleSuccess(200, " ", onePost, res);
    }
    static async singlePostDelete(req, res) {
        const onePost = await Postservices.oneDelete(req.params.id);
        if (onePost === null) return Responses.handleError(400, "The post is not available", res);
        return Responses.handleSuccess(200, "Successfully Deleted", onePost, res);
    }
    static async updatePost(req, res) {
        const post = req.body;
        const onePost = await Postservices.updatePost(post, req.params.id);
        if (onePost === null) return Responses.handleError(400, "The post is not available", res);
        return Responses.handleSuccess(200, "Successfully updated", onePost, res);
    }
    static async createPost(req, res) {
        const { post_id, poster, title, description } = req.body;
        const post = { post_id, poster, title, description, user_id: req.user }
        const onePost = await Postservices.createPost(post);
        return Responses.handleSuccess(201, "Successfully created", onePost, res);
    }
}
export default Authorization;
