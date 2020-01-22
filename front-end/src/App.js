import React from 'react';
import User from './components/User';
import Admin from './components/Admin';
import Home from './components/Home'
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import history from "./history";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user_level: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    render() {
        return (
            <Router history={history}>
                <div className="container-fluid app">
                    <div className="row">
                        <Header/>
                    </div>
                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <Home/>
                            </Route>
                            <Route path="/user">
                                <User user_level={this.state.user_level} public={this.state.public}/>
                            </Route>
                            <Route path="/admin">
                                <Admin user_level={this.state.user_level}/>
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>

        )
    }
}

export default App;
