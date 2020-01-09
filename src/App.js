import React from 'react';
import ComplexList from './components/ComplexList';
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

class App extends React.Component {
    constructor(props){

        super(props);
        this.state = {
            list : [ {
                id: '213',
                data: 'Not Logged In...'}],
            key : ""
        }
    }


    render(){
    return(
        <Router>
    <div className="container-fluid app">
        <div className="row">
            <Header />
        </div>
            <div className="content">
                <Switch>
                <Route path="/user">
                    <User/>
                </Route>
                <Route exact path="/" component={Home}/>
                <Route path="/admin" component={Admin}/>
                </Switch>
        </div>
    </div>
        </Router>

)}}

export default App;
