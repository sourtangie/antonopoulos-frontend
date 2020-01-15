import React from 'react';
import ReactDOM from 'react-dom';
import './style/style.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store';
import {Provider} from 'react-redux';

const routing = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(routing, document.getElementById('root'));

