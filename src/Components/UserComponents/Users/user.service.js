import React from 'react';
import axios from "axios";

let axiosIntanse = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers:{}
})

const getUsers = () => {
    return axiosIntanse.get('/users')
    ;
};
// const getPosts= () => {
//     return axiosIntanse.get('/posts');
// };

export default getUsers;