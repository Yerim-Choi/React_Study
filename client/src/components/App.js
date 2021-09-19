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

import floatingPopulationListChart from "./Floating_population/floatingPopulationListChart";

import floatingPopulationAreaChart from "./Floating_population/floatingPopulationAreaChart";

import floatingPopulationBarChart from "./Floating_population/floatingPopulationBarChart";
import floatingPopulationComposedChart from "./Floating_population/floatingPopulationComposedChart";

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
        <Route
          exact
          path="/floatingPopulationListChart"
          component={floatingPopulationListChart}
        />
        <Route
          exact
          path="/floatingPopulationAreaChart"
          component={floatingPopulationAreaChart}
        />
        <Route
          exact
          path="/floatingPopulationBarChart"
          component={floatingPopulationBarChart}
        />
        <Route
          exact
          path="/floatingPopulationComposedChart"
          component={floatingPopulationComposedChart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
