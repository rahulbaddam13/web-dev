import React from "react";
import PostItem from "./PostItem.js";
import posts from "./posts.json"
const PostList = () => {
    return (
            <>
                { posts.map(posts => {
                                       return(
                                       <PostItem posts ={posts}/>
                                       );
                                       })

                                       }
                </>


); }
export default PostList;
