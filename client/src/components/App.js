import React, { Component } from "react";
import { Route } from "react-router-dom";

// css
import "../css/new.css";

// header
import HeaderAdmin from "./Header/Header admin";

// footer
import Footer from "./Footer/Footer";

// login
import LoginForm from "./LoginForm";

import reactDebounce from "./R094_reactDebounce";

import reactThrottle from "./R095_reactThrottle";

import floatingPopulationList from "./Floating_population/floatingPopulationList";

import rechartsSimpleLineChart from "./Floating_population/rechartsSimpleLineChart";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderAdmin />
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/Debounce" component={reactDebounce} />
        <Route exact path="/Throttle" component={reactThrottle} />
        <Route
          exact
          path="/floatingPopulationList"
          component={floatingPopulationList}
        />
        <Route
          exact
          path="/rechartsSimpleLineChart"
          component={rechartsSimpleLineChart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
