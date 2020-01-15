import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";

const routing = (
    <Provider store ={store}>
            <App />
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

