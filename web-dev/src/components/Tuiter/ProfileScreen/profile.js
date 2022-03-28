import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
const profile = useSelector((state) => state.ProfileScreenReducer);
const dispatch = useDispatch();
 useEffect(() => {
    dispatch({ type: "set-parameter", changeState: "profile" });
  });
return (<div className ="col-12 mt-2">
         <div className="row">
         <h4 className="fw-bold d-inline">{profile.firstName} {profile.lastName}</h4>
         <p className="wd-handle-one wd-grey">5,634 Tweets</p>
         <img src = {profile.bannerPicture} className ="wd-img-one w-100% position-relative"/>
         <img src = {profile.profilePicture} className="position-absolute rounded-circle wd-img wd-img-width-all-one"/>
         </div>
         <div className ="pt-3">
                 <Link to="/tuiter/edit-profile">
                   <button
                     className="btn btn-secondary float-end rounded-pill pt-2"
                     style={{ backgroundColor: "transparent" }}>
                     Edit Profile
                   </button>
                 </Link>
               </div>
         <div className="pt-5">
         <h4 className="fw-bold pt-4">{profile.firstName} {profile.lastName}</h4>
         <p className="wd-handle-one wd-grey">@{profile.handle}</p>
         <p className="wd-bio-one wd-white">{profile.bio}</p>
         </div>
         <div className="pt-1 wd-extra">
         <div><i className="fa fa-map-marker wd-grey"> { profile.location}</i></div>
         <div><i className="fa fa-birthday-cake wd-grey wd-a"> { profile.dateOfBirth}</i></div>
         <div><i className="fa fa-calendar wd-grey wd-a"> { profile.dateJoined}</i></div>
         </div>

         <div className="pt-3 wd-extra">
         <div><p className="fw-bold wd-white"> {profile.followingCount  }</p></div>
         <div><p className="wd-grey wd-b"> Following</p></div>
         <div><p className="fw-bold wd-white wd-a"> {profile.followersCount}</p></div>
         <div><p className="wd-grey wd-b">Followers</p></div>
         </div>







         </div>


 );
};
export default ProfileScreen;
