import axios from "axios";

export const Get_USER = "GET_USER";
export const ADD_USER_LIKE = "ADD_USER_LIKE";


export const getUser = () => {
    return (dispotch) =>{
        return axios
        .get("http://localhost:3005/user")
        .then((res) =>{
            dispotch({ type: Get_USER, payload: res.data[0] });
        });
    };
};

export const addUserLike = (data) => {
    return (dispotch) =>{
        return axios
        .put(`http://localhost:3005/user/${data.id}`, data)
        .then((res) =>{
            dispotch({ type: ADD_USER_LIKE, payload: data });
        });
    };
};