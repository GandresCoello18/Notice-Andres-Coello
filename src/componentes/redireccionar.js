import React from 'react';
import {BrowserRouter, Switch ,Route} from 'react-router-dom';
import General from '../pages/home';
import Tareas from '../pages/pages-tarea';
import Codigo from '../pages/pages-codigo';
import Login from '../pages/login';

function Redireccionar(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login}></Route>           
                <Route exact path="/general" component={General}></Route>
                <Route exact path="/tareas" component={Tareas}></Route>
                <Route exact path="/codigo" component={Codigo}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default Redireccionar;