import React from "react";

const PostSummaryListItem = ({
                                     posts = {
                                         "topic": "Web Development",
                                         "userName": "ReactJS",
                                         "time": "2h",
                                         "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                         "image": "https://www.rapiddg.com/sites/default/files/imce-files/react.png"
                                     }
                                 }
) =>  {
return(
<>
<div className="wd-moveup border rounded wd-main-bg">
<div className="row p-4">
<div className="col-10">
        <div className="row wd-margin-top-one text-secondary wd-lightgrey">
                                    {posts.topic}
        </div>
        <div className="row d-inline-block">
             <p><span className="fw-bolder wd-move-right wd-white">{posts.userName}</span> <i className="fa fa-check wd-white"></i> <span
              className="text-secondary wd-lightgrey">-{posts.time}</span></p>
        </div>
        <div className="row fw-bold wd-margin-top-one wd-white">
          {posts.title}
         </div>
         <div className="row text-secondary">
          {posts.tweets}
         </div>
</div>
        <div className="col-2">
        <img src= {posts.image} className="img-fluid"/>
        </div>

</div>
</div>

 </>);
}
export default PostSummaryListItem;