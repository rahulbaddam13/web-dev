import React, {useEffect} from "react";
import {useDispatch, useSelector}
  from "react-redux";
import TuitListItem
       from "./tuit-list-item";
import {deleteTuit,findAllTuits}
  from "../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(
      state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() =>
       findAllTuits(dispatch),
       []);

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