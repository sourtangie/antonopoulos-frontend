import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import Login from './components/Login'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const routing = (
    <Router>
        <div>
            {/*<Route exact path="/" component={Login} />*/}
            <Route path="/" component={App} />
        </div>
    </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

