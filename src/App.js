import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import RecuperarSenha from "./pages/RecuperarSenha";
import LobbyPage from './pages/LobbyPage/index'
import Pagamento from './pages/Pagamento';
import RoutesLobby from './components/Routes/Lobby/Lobby'; // Telas internas devem ser circuladas por este component
import StoreProvider from './components/Storage/Provider';


export function App(){
    return (
        <React.Fragment>
            <Router>
                <StoreProvider>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/cadastro" component={Cadastro} />
                        <Route path="/senha" component={RecuperarSenha} />
                        {/* TODO: MUDAR AQUI PARA ROUTESLOBBY */}
                        <RoutesLobby path="/lobby" component={LobbyPage} />
                        <RoutesLobby path="/pagamento" component={Pagamento} />
                    </Switch>
                </StoreProvider>
            </Router>
        </React.Fragment>
    );
}

export default App;
