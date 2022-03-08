import React from "react";

const WhoToFollowListItem = ( { who = {
                                avatarIcon: 'https://pbs.twimg.com/profile_images/1321163587679784960/0ZxKlEKB_400x400.jpg',
                                userName: 'NASA',
                                handle: 'NASA',
                                     }
                                 } ) =>  {

return(
<>
<li className="list-group-item wd-bg-list wd-white">
            <img src = {who.avatarIcon} className="rounded-circle wd-img wd-img-width-all"/>
            <p className="wd-bold d-inline fw-bold"> {who.userName}<i className="fa fa-check wd-tick-left"></i></p>
            <button type="button" className="btn btn-primary wd-bt-white fw-bold rounded-pill wd-follow-one wd-follow-two">Follow</button>
            <br/>
            <p className="d-inline wd-left-move wd-handle">@{who.handle}</p>


         </li>
</>
 );
}
export default WhoToFollowListItem;