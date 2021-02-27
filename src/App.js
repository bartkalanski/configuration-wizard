import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './components/Home'
import ConfigurationWizard from "./components/ConfigurationWizard";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/wizard" component={ConfigurationWizard} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
