import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.scss";

import store from "../../redux/store";

import PrivateRoute from "../common/PrivateRoute/";

import ErrorBoundary from "../common/ErrorBoundary/ErrorBoundary";
import NotFound from "../common/NotFound/";

import Sidebar from "../Sidebar";
import Steps from "../Steps";
import SignIn from "../SignIn";
import LoggedInView from "../LoggedInView";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <Route path="/" exact component={Sidebar} />
            <Switch>
              <Route path="/" exact component={Steps} />
              <Route path="/signin" exact component={SignIn} />
              <PrivateRoute path="/profile" exact component={LoggedInView} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
