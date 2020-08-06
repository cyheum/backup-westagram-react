import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./Styles/reset.scss";
import "./Styles/common.scss";
import LoginHeum from "./Pages/yeheum/Login/Login";
import MainHeum from "./Pages/yeheum/Main/Main";
import LoginTae from "./Pages/tae/Login/Login";
import MainTae from "./Pages/tae/Main/Main";
import LoginOh from "./Pages/seunghaoh/Login/Login";
import MainOh from "./Pages/seunghaoh/Main/Main";
import LoginGy from "./Pages/gyuyoung/Login/Login";
import MainGy from "./Pages/gyuyoung/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginHeum} />
          <Route exact path="/main-yeheum" component={MainHeum} />
          <Route exact path="/login-tae" component={LoginTae} />
          <Route exact path="/main-tae" component={MainTae} />
          <Route exact path="/login-oh" component={LoginOh} />
          <Route exact path="/main-oh" component={MainOh} />
          <Route exact path="/login-gy" component={LoginGy} />
          <Route exact path="/main-gy" component={MainGy} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
