import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import MainPage from "./pages/MainPage";
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
  faDna,
  faFaceGrinBeamSweat,
  faFaceLaughWink,
  faFaceSadTear,
  faFire,
  faForward,
  faFutbol,
  faGear,
  faHandFist,
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
import RegisterInfo from "./pages/RegisterInfo";
import Dashboard from "./pages/Dashboard";
import TrainingDetails from "./components/TrainingDetails";
import Trainingplan from "./components/Trainingplan";
import PrivateRoute from "./components/PrivateRoute";
import PrivateRoute2 from "./components/PrivateRoute2";
import { collection, onSnapshot } from "firebase/firestore";
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
  faHandFist,
  faList,
  faArrowRightFromBracket,
  faBars,
  faPersonRunning,
  faUtensils,
  faGear,
  faFaceSadTear,
  faClock,
  faFaceGrinBeamSweat,
  faFaceLaughWink,
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
  faAngleRight,
  faDna
);

function App() {
  /* USERSINFO */
  const [users, setUsers] = useState([]);
  useEffect(
    () =>
      onSnapshot(collection(db, "usersInfo"), (snapshot) =>
        setUsers(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  const user = localStorage.getItem("loggedInUser");
  const matchingUser = users.filter((userInfo) => userInfo.id === user);

  const [trainings, setTrainings] = useState([]);

  useEffect(
    () =>
      onSnapshot(collection(db, "trainings"), (snapshot) =>
        setTrainings(
          snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
        )
      ),
    []
  );

  /* TO DOS */
  const [todo, setTodo] = useState([]);
  useEffect(
    () =>
    onSnapshot(collection(db, "todo"), (snapshot) =>
    setTodo(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    ),
    []
    );
    const myTodos = todo.filter((element) => element.uploadedBy === user);
    
    /* MEALS */
    
    const [meals, setMeals] = useState([]);
    useEffect(
      () =>
      onSnapshot(collection(db, "meals"), (snapshot) =>
      setMeals(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
      []
      );
      const myMeals = meals.filter((meal) => meal.uploadedBy === user);

  /* MEALS COUNTER */

  let allCalorie = 0;
  let allProtein = 0;

  myMeals.map((meal) => {
    allCalorie += Number(meal.calorie);
    allProtein += Number(meal.protein);
  });

  let todayGoal = (allCalorie / 2000 + allProtein / 70) / 2;

  if (todayGoal > 1) {
    todayGoal = 1;
  }

  return (
    <Router>
      <Nav />
      <PrivateRoute2 path="/login" exact>
        <Login />
      </PrivateRoute2>
      <Route path="/" component={MainPage} exact />
      <PrivateRoute2 path="/register" exact>
        <RegisterInfo />
      </PrivateRoute2>
      <PrivateRoute path="/dashboard" exact>
        <Dashboard
          todo={myTodos}
          trainings={trainings}
          todayGoal={todayGoal}
          users={users}
          matchingUser={matchingUser}
        />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/training" exact>
        <Trainingplan trainings={trainings} matchingUser={matchingUser} />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/training/:id" exact>
        <TrainingDetails trainings={trainings} matchingUser={matchingUser} />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/todo" exact>
        <ToDo todo={myTodos} matchingUser={matchingUser} />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/meal" exact>
        <Meal
          meals={myMeals}
          matchingUser={matchingUser}
          allCalorie={allCalorie}
          allProtein={allProtein}
          todayGoal={todayGoal}
        />
      </PrivateRoute>
    </Router>
  );
}

export default App;
