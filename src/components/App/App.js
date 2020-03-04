import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import "./App.scss";

import store from "../../redux/store";

import Sidebar from "../Sidebar";
import Main from "../Main";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import NotFound from "../NotFound/";
import NameYourAssistant from "../NameYourAssistans/NameYourAssistant";
import SelectStyles from "../SelectStyles/SelectStyles";
import CreateYourAccount from "../CreateYourAccount";
import SuccessfulSetup from "../SuccessfulSetup";
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
              <Main>
                <Route path="/" exact component={NameYourAssistant} />
                <Route path="/second-step" exact component={SelectStyles} />
                <Route path="/third-step" exact component={CreateYourAccount} />
                <Route path="/forth-step" exact component={SuccessfulSetup} />
                <Route path="/signin" exact component={SignIn} />
                <Route path="/profile" exact component={LoggedInView} />
              </Main>
              <Route component={NotFound} />
            </Switch>
          </Router>
        </Provider>
      </ErrorBoundary>
    </div>
  );
}

export default App;
