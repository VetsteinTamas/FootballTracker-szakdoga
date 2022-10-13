import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBrain,
  faFutbol,
  faHouse,
  faList,
  faNoteSticky,
  faPercent,
  faUserPen,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./pages/Login";
import RegisterDetails from "./pages/RegisterDetails";
import RegisterInfo from "./pages/RegisterInfo";

library.add(
  faHouse,
  faNoteSticky,
  faBrain,
  faFutbol,
  faUtensils,
  faUserPen,
  faPercent,
  faList
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
    </Router>
  );
}

export default App;
