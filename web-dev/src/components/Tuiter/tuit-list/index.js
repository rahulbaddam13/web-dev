import React from "react";
import {useSelector} from "react-redux";
import tuits from "../data/tuits.json";
import TuitListItem
       from "./tuit-list-item";

const TuitList = () => {
    const tuits = useSelector(
      state => state.tuits);
      return (
          <>
          <div className ="wd-bg-list wd-border-curved wd-102">
            {tuits.map((element) => {
              return <TuitListItem key={element._id} post={element} />;
            })}
            </div>
          </>
        );
}

export default TuitList;