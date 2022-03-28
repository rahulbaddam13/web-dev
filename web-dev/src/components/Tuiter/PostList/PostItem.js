import React from "react";


const PostItem = (
{
                                     posts = {
                                     "avatarIcon": "https://pbs.twimg.com/profile_images/1489375145684873217/3VYnFrzx_400x400.jpg",
                                         "userName": "Elon Musk",
                                         "handle" :"@elonmusk",
                                         "time": "23h",
                                         "caption":"Celebrating our one millionth 4680 cell in January",
                                         "image": "https://pbs.twimg.com/media/FL5vqDMWUA8qyMp?format=jpg&name=900x900",
                                         "title": "It is a long established fact that a reader will",
                                         "content":"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters . . .",
                                         "comments":"4.2k",
                                         "retweets":"3.5k",
                                         "likes":"37.5k"
                                     }
                                 }) =>  {
return(
<>
<div className="row">
<div className="col-11">
<div className ="row">
        <div className="col-2">
           <img src = {posts.avatarIcon} className="rounded-circle wd-img wd-img-width-all"/>
        </div>

    <div className="col-8 d-inline wd-user">
        <div className ="col">
        <div className ="wd-caption">
        <p className = "fw-bold d-inline wd-white">{posts.userName}</p><i className="fa fa-check wd-white d-inline p-2"></i>
        <p className = "wd-grey d-inline">{posts.handle}</p>
        <p className = "d-inline wd-grey">-{posts.time}</p>

        </div>
        </div>

        <div className ="wd-caption">
        <p className ="wd-white wd-caption-width">{posts.caption}</p>
        </div>
    </div>
    <div className ="col-2">
    <i className="fa fa-ellipsis-h fa-lg wd-ellipse wd-grey wd-float-right"></i>
    </div>

<div className="wd-main-img position-relative">
                                     <img src = {posts.image} className={`${posts.title === "" ? " wd-main-img-two" : " wd-main-img-one"} img-fluid`}/>
                                     </div>
                                     {posts.title === "" ? "" :
                                     <div className ="wd-content-title">
                                     <p className ="wd-title wd-white">{posts.title}</p>
                                     <p className ="wd-content wd-grey">{posts.content}</p>
                                     </div>
                                     }

    <div className="wd-fifth-container">

            <div>
                <form action="#">
                    <button className="wd-button">
                        <i className="fa fa-thin fa-comment wd-type-one"> {posts.comments}</i>
                    </button>
                </form>
            </div>
            <div>
                <form action="#">
                    <button className="wd-button">
                        <i className="fa fa-thin fa-retweet wd-type-one"> {posts.retweets}</i>
                    </button>
                </form>
            </div>
            <div>
                <form action="#">
                    <button className="wd-button">
                        <i className="fa fa-solid fa-heart wd-type-two"> {posts.likes}</i>
                    </button>
                </form>
            </div>
            <div>
                <form action="#">
                    <button className="wd-button">
                        <i className=" fas fa-upload wd-type-one"></i>
                    </button>
                </form>
            </div>
        </div>
</div>  // fifth container


</div>
</div>
<hr/>
 </>);
}
export default PostItem;