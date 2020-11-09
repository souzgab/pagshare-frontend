import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import { NavigationBar } from "./components/NavigationBar";
import { Layout } from "./components/Layout";

const App = () => {
    return (
        <React.Fragment>
          <Router>
           
            <Route exact path="/" component={Home} />
            <Layout>
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
    );
}
export default App;
