import React from "react";
import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "../data/who.json";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
const who = useSelector((state) => state.who);
    return (
    <>
    <div className="list-group">
          <div className="list-group-item  fa-in">
            <h5>Who to follow</h5>
          </div>
          {who.map((element) => {
                  return <WhoToFollowListItem who={element} />;
                })}
              </div>
    </>

);
 }
export default WhoToFollowList;
