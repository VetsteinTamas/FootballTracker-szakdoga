import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBrain, faFutbol, faHouse, faList, faNoteSticky, faPercent, faUserPen, faUtensils } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse, faNoteSticky, faBrain,faFutbol,faUtensils,faUserPen,faPercent,faList);

function App() {
  return (
    <Router>
      <Nav />
      <MainPage />
    </Router>
  );
}

export default App;
