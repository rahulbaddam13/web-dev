import React from "react";
import PostSummaryListItem from "./PostSummaryListItem";
import posts from "./posts.json";


const  PostSummaryList= () => {
    return (
    <>
    { posts.map(posts => {
                           return(
                           <PostSummaryListItem posts ={posts}/>
                           );
                           })

                           }
    </>

);
 }
export default PostSummaryList;