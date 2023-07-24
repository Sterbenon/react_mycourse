import React, {useState} from 'react';
import PostDetail from "../Post_details/Post_detail";

const Post = ({post}) => {
    const [isShow, setIsShow] = useState(false);
    const {id, title} = post;
    return (
        <div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <button onClick={()=>setIsShow(!isShow)}>{isShow?'Hide':'Show'}</button>
            {
                isShow&&<PostDetail post={post}/>
            }
        </div>
    );
};

export default Post;