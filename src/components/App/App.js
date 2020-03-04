import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.scss";

import store from "../../redux/store";

import Sidebar from "../Sidebar";
import Steps from "../Steps";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NotFound from "../NotFound/";
import SignIn from "../SignIn";
import LoggedInView from "../LoggedInView";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Provider store={store}>
          <Router>
            <Route path="/" component={Sidebar} />
            <Switch>
              <Route path="/" exact component={Steps} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/profile" exact component={LoggedInView} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
