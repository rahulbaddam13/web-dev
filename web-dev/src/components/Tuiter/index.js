import React from "react";
import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import PostList from "./HomeScreen/HomeScreen";
import '../../vendors/bootstrap/bootstrap.min.css';
import './explore.css';
import './exploreOne.css';
import './home.css';
import './homeOne.css';


const Tuiter = () => {
    return(
      <>
      <ExploreScreen/>
      <Link to = "/home">
      Home
      </Link> |
      <Link to="/hello">
                         Hello
                        </Link> |
                        <Link to="/labs">
                         Labs
                        </Link>
      </>

    )
};

export default Tuiter;