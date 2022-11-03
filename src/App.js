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
  faClipboard,
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
  faPlus,
  faRightToBracket,
  faSquarePollVertical,
  faUserPen,
  faUtensils,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Login from "./pages/Login";
import RegisterDetails from "./pages/RegisterDetails";
import RegisterInfo from "./pages/RegisterInfo";
import Dashboard from "./pages/Dashboard";
import TrainingDetails from "./components/TrainingDetails";
import Trainingplan from "./components/Trainingplan";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "./firebase.js";
import { useEffect, useState } from "react";
import ToDo from "./components/ToDo";
import Meal from "./components/Meal";

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
  faPlus,
  faClipboard,
  faSquarePollVertical,
  faFire,
  faRightToBracket,
  faBackward,
  faForward,
  faXmark,
  faCircle,
  faAngleRight
);

function App() {
  /* TRAINING PLANS */
  const [trainings, setTrainings] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "trainings"), (snapshot) =>
        setTrainings(snapshot.docs.map((doc) => doc.data()))
      ),
    []
  );
  console.log(trainings);

  /* TO DOS */
  const [todo, setTodo] = useState([]);

  const fetchTodos = async () => {
    await getDocs(collection(db, "todo")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodo(newData);
    });
  };

  /* MEALS */

  const [meals, setMeals] = useState([]);

  const fetchMeals = async () => {
    await getDocs(collection(db, "meals")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setMeals(newData);
    });
  };
  return (
    <Router>
      <Nav />
      <Route path="/login" component={Login} exact />
      <Route path="/" component={MainPage} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/registerdetails" component={RegisterDetails} exact />
      <Route path="/registerinfo" component={RegisterInfo} exact />
      <Route path="/dashboard" exact>
        <Dashboard todo={todo} />
      </Route>
      <Route path="/dashboard/training" exact>
        <Trainingplan trainings={trainings} />
      </Route>
      <Route path="/dashboard/training/:id" exact>
        <TrainingDetails trainings={trainings} />
      </Route>
      <Route path="/dashboard/todo" exact>
        <ToDo todo={todo} />
      </Route>
      <Route path="/dashboard/meal">
        <Meal meals={meals} />
      </Route>
    </Router>
  );
}

export default App;
