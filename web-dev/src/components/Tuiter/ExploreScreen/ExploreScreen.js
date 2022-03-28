import React from "react";
import NavigationSidebar from "../NavigationSideBar/NavigationSideBar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
const ExploreScreen = () => {
const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "set-parameter", changeState: "explore" });
  });
    return(


                   <ExploreComponent/>



    );
};
export default ExploreScreen;
