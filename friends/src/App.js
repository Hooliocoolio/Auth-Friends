import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendList from "./components/FriendList";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friendlist">Friends List</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friendlist" component={FriendList} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;