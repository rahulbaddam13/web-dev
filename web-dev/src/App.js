import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index";
import Tuiter from "./components/Tuiter/index";
import HomeScreen from "./components/Tuiter/home-screen/index";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/Tuiter/ProfileScreen/profile";
import EditProfile from "./components/Tuiter/EditProfile/EditProfile";


function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/">
            <Route path="" element={<Labs/>} />
            <Route path="labs" element={<Labs/>} />
            <Route path="hello" element={<HelloWorld/>} />
            <Route path="tuiter" element={<Tuiter/>}>
              <Route index element={<HomeScreen/>} />
              <Route path="explore" element={<ExploreScreen/>} />
              <Route path="profile" element={<ProfileScreen/>} />
              <Route path="edit-profile" element={<EditProfile/>} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

