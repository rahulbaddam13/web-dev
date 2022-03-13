import React from "react";
import {Link} from "react-router-dom";

const NavigationSideBar = ( { active = 'explore'} ) => {
    return(
<>

    <div class="col-2 col-md-2 col-lg-1 col-xl-2 mt-3 wd-right">
      <div className="list-group">
                <Link to ="/" className="list-group-item wd-list-color">
                <i className="fab fa-twitter wd-white"></i></Link>


                <Link to="/tuiter/homee" className={`list-group-item ${active === 'home' ? 'active' : ''} wd-list-color list-group-item-action`}>
                <i className="fa fa-home wd-white"></i>
                <span className ="d-none d-xl-block wd-first-col">Home</span></Link>

                <Link to="/tuiter/explorer" className={`list-group-item ${active === 'explore' ? 'active' : ''} wd-list-color list-group-item-action`} >
                <i className="fa fa-hashtag wd-white"></i>
                <span className ="d-none d-xl-block wd-first-col">Explore</span></Link>

                <a href="notifications.html" className="list-group-item wd-list-color list-group-item-action ">
                <i className="fa fa-bell wd-white"></i>
                <span className ="d-none d-xl-block wd-first-col">Notification</span></a>

                <a href="messages.html" className="list-group-item wd-list-color list-group-item-action">
                <i className="fa fa-envelope wd-white"></i>
                <span className ="d-none d-xl-block wd-first-col wd-first-col">Messages</span></a>

                <a href="bookmarks.html" className="list-group-item wd-list-color list-group-item-action">
                <i className="fa fa-bookmark wd-white"></i>
                <span className ="d-none d-xl-block wd-first-col">Bookmarks</span></a>

                <a href="lists.html" className="list-group-item wd-list-color list-group-item-action">
                <i className="fa fa-list wd-white"></i>
                <span className ="d-none d-xl-block wd-first-col">Lists</span></a>
                <a href="profile.html" className="list-group-item wd-list-color list-group-item-action">
                <i className="fa fa-user wd-white"></i>
                <span className ="d-none d-xl-block wd-first-col">Profile</span></a>

                <a href="#" class="list-group-item wd-list-color list-group-item-action">
                <span class="fa-stack fa-1x wd-set-padding">
                <i class="fas fa-circle fa-stack-1x wd-white"></i>
                <i class="fas fa-ellipsis-h fa-stack-1x fa-inverse wd-black" ></i>
                </span>
                <span class ="d-none d-xl-block wd-first-col wd-set-height">More</span></a>
      </div>
      <div className="pt-2 position-relative">
      <form action="tuit.html">
      <button type="button" className="btn btn-primary rounded-pill w-100 wd-view-port">Tweet</button>
      </form>
      </div>
      </div>
  </>
   );
}
export default NavigationSideBar;