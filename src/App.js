import "./scss/main.scss";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { PrivateRouter } from "./PrivateRouter";
import { Login } from "./Login/Login";

function App() {
  return (
    <HashRouter basename="/">
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <PrivateRouter path="/home">Home</PrivateRouter>
          <PrivateRouter path="/setting">Setting</PrivateRouter>
          <Route path="*">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
