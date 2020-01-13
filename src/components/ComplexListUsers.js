import React from 'react';
import FormView from "./FormView";
import User from "./User";
import {Route, Switch} from "react-router-dom";
import AddUser from "./addUser";
class ComplexListUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            users: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handler = this.handler.bind(this);
    }

    componentDidMount() {
        this.setState({
            users: this.props.users
        });
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.users !== prevProps.users){
            this.setState({users: this.props.users});
            this.fullList = this.props.users;
        }
    }

    fullList;
    handler(value){
        this.fullList = value;
        this.setState({filtered:value});
    }

    handleChange(e) {
        let filteredItems = [];
        if (e.target.value !== "") {
            let currentUsers =this.fullList;
            console.log(currentUsers);
            filteredItems = currentUsers.filter((user) => {
                let data = "data "+"transaction " + user.email.toLowerCase() + user.privateKey.toLowerCase() +user.publicKey.toLowerCase() +user.privateKey_enc.toLowerCase();
                return data.includes(
                    e.target.value.toLowerCase());
            });
            this.setState({
                users: filteredItems
            });

        } else {
            filteredItems = this.fullList;
        }
        this.setState({
            users: filteredItems
        });
    }

    render() {
        const handler = this.handler;
        return (
            <div className="col-12 col-lg-8">
                <div className="search bg-dark">
                    <Switch>
                        <Route path="/user">
                            <FormView handler = {handler.bind(this)}/>
                        </Route>
                    </Switch>
                    <h2 className="title text-white">Users</h2>
                    <input className ="form-control mr-sm-2" type="text" placeholder="Search by user name, public Key or private Key..." onChange={this.handleChange}/>
                </div>

                <ul className="list-group">
                    {this.state.users.map(user => (
                        <li className="list-group-item bg-light" key={user.id}>
                            <div className="d-flex w-100 justify-content-between"><h4 className="mb-1"></h4></div>
                            <div><h5 className="mb-1">User</h5> <p className="mb-1 overflow-auto">{user.email}</p></div>
                            <div><h5 className="mb-1">Private Key</h5> <p className="mb-1">{user.privateKey}</p></div>
                            <div><h5 className="mb-1">Public Key</h5> <p className="mb-1">{user.publicKey}</p></div>
                            <div><h5 className="mb-1">Encrypted Private Key</h5> <p className="mb-1">{user.privateKey_enc}</p></div>


                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComplexListUsers;