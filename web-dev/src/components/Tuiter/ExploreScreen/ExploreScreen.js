import React from "react";
import NavigationSidebar from "../NavigationSideBar/NavigationSideBar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList";
const ExploreScreen = () => {
    return(
        <div className="row mt-2">
        <NavigationSidebar active="explore"/>
        <div class="col-6 col-sm-10 col-md-10 col-lg-7 col-xxl-6 col-xl-6 col-xs-10">
                   <ExploreComponent/>
        </div>
            <div class="col-4 pt-3 d-none d-sm-none d-md-none d-lg-block col-lg-4 d-xl-block col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ExploreScreen;
