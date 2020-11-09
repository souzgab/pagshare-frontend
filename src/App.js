import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";

import { Layout } from "./components/Layout";

const mystyle = {
  color: "white",
  backgroundColor: "blue",
  fontFamily: "Arial",
  width: '10000px'
};

export function App(){
    return (
        <React.Fragment>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/cadastro" component={Cadastro} />
              </Switch>
            </Layout>
          </Router>
        </React.Fragment>
    );
}

export default App;
