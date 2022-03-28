import React from "react";
import {Link} from "react-router-dom";
import {Outlet} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import PostList from "./HomeScreen/HomeScreen";
import '../../vendors/bootstrap/bootstrap.min.css';
import './explore.css';
import './exploreOne.css';
import './home.css';
import './homeOne.css';
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import NavigationSidebar from "./NavigationSideBar/NavigationSideBar";
import WhoToFollowList from "./WhoToFollowList/WhoToFollowList";
import ProfileScreenReducer from "./reducers/profile-reducer";
import NavigationSidebarReducer from "./reducers/nav-side-bar-reducer";

const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer , ProfileScreenReducer, NavigationSidebarReducer
});
const store = createStore(reducer);
const Tuiter = () => {
  return (
  <Provider store={store}>
    <div className="row mt-2">
      <div class="col-2 col-md-2 col-lg-2 col-xl-2 ">
        <NavigationSidebar/>
      </div>
      <div className="col-10 col-lg-7 col-xl-6">
        <Outlet/>
      </div>
      <div className="d-none d-lg-block col-lg-4 col-xl-4 mt-2">
        <WhoToFollowList/>
      </div>
    </div>
    </Provider>
  );
};
export default Tuiter;
