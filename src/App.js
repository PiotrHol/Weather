import "./scss/main.scss";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { Login } from "./Login/Login";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getUser } from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        dispatch(getUser(user.uid));
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
          <PrivateRouter path="/setting">Setting</PrivateRouter>
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
