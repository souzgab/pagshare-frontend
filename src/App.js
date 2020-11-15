import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";

import * as mu from "@material-ui/core";

export function App(){
    return (
        <React.Fragment>
          <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/cadastro" component={Cadastro} />
                  <Route path="/senha" component={RecuperarSenha} />
              </Switch>
          </Router>
        </React.Fragment>
    );
}

export default App;
