import React from 'react';

const PostDetail = ({post}) => {
    const{id, userId, title, body} = post;
    return (
        <div>
            <hr/>
            <div>Id: {id}</div>
            <div>UserId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
            <hr/>
        </div>
    );
};

export default PostDetail;