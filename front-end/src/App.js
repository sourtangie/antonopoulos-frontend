import React from 'react';
import ComplexListTransactions from './components/ComplexListTransactions';
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
import Login from "./components/Login";

class App extends React.Component {
    constructor(props){

        super(props);
        this.state = {
            list : [ {
                logNumber: 'Not Logged In...'}],
            public : "",
            user_level: 0
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(email,privateKey) {
        this.setState(
            {user_level:2,
                email: email,
            privateKey:privateKey});
    }


    render(){
        if(this.state.user_level === 0){
            return( <Router>
                <div className="container-fluid app">
                    <div className="row">
                        <Login handleSubmit={this.handleSubmit.bind(this)} />
                    </div>
                    <div className="content">
                    </div>
                </div>
            </Router>);

        }else if(this.state.user_level === 2){
    return(
        <Router>
    <div className="container-fluid app">
        <div className="row">
            <Header />
        </div>
            <div className="content">
                <Switch>
                <Route path="/user">
                    <User user_level={this.state.user_level} list={this.state.list} public={this.state.public} />
                </Route>
                <Route exact path="/" component={Home}/>
                <Route path="/admin">
                <Admin user_level={this.state.user_level}/>
                </Route>
                </Switch>
        </div>
    </div>
        </Router>

)
    }}}

export default App;
