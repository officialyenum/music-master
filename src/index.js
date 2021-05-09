import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './pages/App';
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact={true} path="/" render={() => <App/>}/>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root')
);

