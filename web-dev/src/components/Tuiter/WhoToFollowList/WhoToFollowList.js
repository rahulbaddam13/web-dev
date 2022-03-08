import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json";

const WhoToFollowList = () => {
    return (
    <>

            <ul className="list-group wd-max-width wd-border-curved">
            <li className="list-group-item wd-bg-list fw-bold wd-white">Who to follow</li>
            {
                                    who.map(who => {
                                             return(
                                                 <WhoToFollowListItem who={who}/>
                                             );
                                         })

                                }

            </ul>
    </>

);
 }
export default WhoToFollowList;
