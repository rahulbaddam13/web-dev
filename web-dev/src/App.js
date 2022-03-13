import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index";
import Tuiter from "./components/Tuiter/index";
import HomeScreen from "./components/Tuiter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen";


function App() {
  return (
<BrowserRouter>
     <div className="container">
       <Routes>
         <Route path="/hello"
                     exact={true}
                     element={<HelloWorld/>}/>
              <Route path="/"
                     exact={true}
                     element={<Labs/>}/>
              <Route path="/labs"
                     exact={true}
                     element={<Labs/>}/>
              <Route path="/Tuiter"
                     exact={true}
                     element={<HomeScreen/>}/>
              <Route path="/Tuiter/home"
                                   exact={true}
                                   element={<HomeScreen/>}/>
              <Route path="/Tuiter/explore"
              exact={true}
              element={<ExploreScreen/>}/>

       </Routes>
     </div>
   </BrowserRouter>
  );
}
export default App;

