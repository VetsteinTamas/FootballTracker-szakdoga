import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faAngleRight,
  faArrowRightFromBracket,
  faBackward,
  faBars,
  faBrain,
  faCircle,
  faClock,
  faCrosshairs,
  faFaceSadTear,
  faFire,
  faForward,
  faFutbol,
  faGear,
  faHouse,
  faList,
  faLocationDot,
  faNoteSticky,
  faPercent,
  faPersonRunning,
  faRightToBracket,
  faSquarePollVertical,
  faUserPen,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./pages/Login";
import RegisterDetails from "./pages/RegisterDetails";
import RegisterInfo from "./pages/RegisterInfo";
import Dashboard from "./pages/Dashboard";
import TrainingDetails from "./components/TrainingDetails";
import Motivation from "./components/Motivation";

library.add(
  faHouse,
  faNoteSticky,
  faBrain,
  faFutbol,
  faUtensils,
  faUserPen,
  faPercent,
  faList,
  faArrowRightFromBracket,
  faBars,
  faPersonRunning,
  faUtensils,
  faGear,
  faFaceSadTear,
  faClock,
  faLocationDot,
  faCrosshairs,
  faSquarePollVertical,
  faFire,
  faRightToBracket,
  faBackward,
  faForward,
  faCircle,
  faAngleRight
);

function App() {
  return (
    <Router>
      <Nav />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={MainPage} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/registerdetails" component={RegisterDetails} exact />
      <Route path="/registerinfo" component={RegisterInfo} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route
        path="/dashboard/training/detail"
        component={TrainingDetails}
        exact
      />
      <Route path="/dashboard/motivation" component={Motivation} exact />
    </Router>
  );
}

export default App;
