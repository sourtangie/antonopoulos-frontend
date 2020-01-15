import React from 'react';
import User from './components/User';
import Admin from './components/Admin';
import Home from './components/Home'
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import FormView from "./components/FormView";
import LoginForm from "./components/LoginForm";
import history from "./history";
import {PrivateRoute} from "./PrivateRoute";
import Redirect from "react-router-dom/es/Redirect";

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            user_level: 0
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginSuccess = "Match complete";
        this.loginFail = "UNDEFINED";
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }


    render(){
    return(
        <Router history={history}>
    <div className="container-fluid app">
        <div className="row">
            <Header />
        </div>
        <div className="content">
            <Switch>
                <Route exact path ="/">
                    <Home />
                </Route>
                <Route path="/user">
                    <User user_level={this.state.user_level} public={this.state.public} />
                </Route>
                <Route path="/admin">
                <Admin user_level={this.state.user_level}/>
                </Route>
            </Switch>
        </div>
    </div>
        </Router>

)}}

export default App;
