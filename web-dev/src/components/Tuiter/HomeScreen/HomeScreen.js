import React from "react";
import NavigationSidebar from "../NavigationSideBar/NavigationSideBar";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import PostList from "../PostList/PostList";
const HomeScreen = () => {
    return(
        <div class="row mt-2">

                    <NavigationSidebar active="home"/>

                 <div class="col-6 col-sm-10 col-md-10 col-lg-6 col-xxl-6 col-xl-6 col-xs-10 wd-mr-left mt-3 wd-move-l">
                       <PostList/>
                        </div>
                                <div class="col-4 pt-3 d-none d-none d-sm-none d-md-none d-lg-block d-xl-block col-lg-5 col-xl-4 mt-3 wd-width-summary">
                                <PostSummaryList/>
                                            </div>

                </div>
    );
};
export default HomeScreen;