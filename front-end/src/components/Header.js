/**
 * Created by cassi on 05/12/19.
 */
import React from 'react';
import logo from "../img/logo.png";
import adminPic from "../img/key.svg";
import {Link, Route, Switch} from "react-router-dom";
import history from "../history";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.clearLocal = this.clearLocal.bind(this)

    }

    clearLocal() {
        localStorage.setItem('user', "");
        history.push('/login')
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark header-padding main-header">
                <Link to="/" className="navbar-brand font-weight-bold text-white" href="#">
                    <img className="brand-pic" src={logo} width="30" height="30" alt=""/>
                    Antonopolous Explorer</Link>
                <div className="col-lg-8">
                    <Switch>
                        <Route path="/admin">
                            <h5 className="text-center title text-white">ADMIN PANEL</h5>
                        </Route>
                        <Route path="/user">
                            <h5 className="text-center title text-white">USER PANEL</h5>
                        </Route>
                    </Switch>
                </div>
                <div className="col-lg">
                    <Link to="/admin"><img src={adminPic} className="adminButton"/></Link>
                </div>
            </nav>)
    }
}

export default Header;