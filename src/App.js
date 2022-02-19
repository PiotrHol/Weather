import "./scss/main.scss";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { Login } from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUser } from "./redux/actions/authActions";
import { Setting } from "./components/Setting/Setting";
import { fetchData } from "./redux/reducers/citySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        dispatch(getUser(user.uid));
        dispatch(fetchData);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <HashRouter basename="/">
      <div className="app">
        <Switch>
          <PrivateRouter exact path="/">
            Home
          </PrivateRouter>
          <PrivateRouter path="/setting">
            <Setting />
          </PrivateRouter>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
