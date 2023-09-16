import axios from "axios";

export const Get_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";
export const EDIT_POST = "EDIT_POST";
export const DELETE_POST = "DELETE_POST";
export const ADD_POST_LIKE = "ADD_POST_LIKE";

export const getPosts = () => {
    return (dispotch) =>{
        return axios
        .get("http://localhost:3005/posts")
        .then((res) =>{
            dispotch({ type: Get_POSTS, payload: res.data });
        });
    };
};




export const addPost = (data) => {
    return (dispotch) =>{
        return axios
        .post("http://localhost:3005/posts", data)
        .then((res) =>{
            dispotch({ type: ADD_POST, payload: data });
        });
    };
};

export const editPost = (data) => {
    return (dispotch) =>{
        return axios
        .put(`http://localhost:3005/posts/${data.id}`, data)
        .then((res) =>{
            dispotch({ type: EDIT_POST, payload: data });
        });
    };
};

export const deletePost = (postId) => {
    return (dispotch) =>{
        return axios
        .delete(`http://localhost:3005/posts/${postId}`)
        .then((res) =>{
            dispotch({ type: DELETE_POST, payload: postId });
        });
    };
};

export const addPostLike = (data) => {
    return (dispotch) =>{
        return axios
        .put(`http://localhost:3005/posts/${data.id}`, data)
        .then((res) =>{
            dispotch({ type: ADD_POST_LIKE, payload: data });
        });
    };
};

