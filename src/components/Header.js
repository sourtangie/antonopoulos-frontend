/**
 * Created by cassi on 05/12/19.
 */
import React from 'react';
import FormView from "./FormView";
import logo from "../img/logo.png";
import adminPic from "../img/key.svg";
import {
    BrowserRouter as Router,
        Switch,
        Route,
        Link
} from "react-router-dom";


class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-dark header-padding main-header">
                <Link to="/" className="navbar-brand font-weight-bold text-white" href="#">
                    <img className="brand-pic" src={logo} width="30" height="30" alt="" />
                    Antonopolous Explorer</Link>
                <div className="col-lg-8">
                <Switch>
                    <Route path = "/user" component={FormView}/>
                </Switch>
                </div>
                <div className="col-lg">
                    <Link to="/admin"><img src={adminPic} className="adminButton"/></Link>
                </div>
            </nav>)}
}
export default Header;