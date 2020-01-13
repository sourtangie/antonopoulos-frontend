import ItemService from "../api/ItemService";
import React, { Component } from "react";
import ComplexListTransactions from "./ComplexListTransactions";
import {Link, Route, Switch} from "react-router-dom";
import User from "./User";
import ComplexListUsers from "./ComplexListUsers";
import AddUser from "./addUser";
import NetworkInfo from "./NetworkInfo";


class Admin extends Component {
    constructor(props) {
        super(props);
        this.itemService = new ItemService();
        this.state = {
            filtered: [],
            logFamily: "a75563",
            users: [ {
                email: 'casper',
                privateKey: 'privatekey1',
                publicKey:"publickey1",
                privateKey_enc: "encprivatekey1"
                },
                {
                    email:'casper2',
                    privateKey: 'privatekey2',
                    publicKey:"publickey2",
                    privateKey_enc: "encprivatekey2"
                }]
        }
    }
    componentDidMount() {
        this.setState({
            user_level:this.props.user_level
        });
        this.itemService.getAllTransactions(this.state.logFamily).then(items => {
           this.setState({filtered: items});
            console.log("init="+this.state);
    })}


    render(){
        if(this.state.user_level !== 2){
            return(
            <div>
                <div className="text-center">
                    <h5 className="text-center">ADMIN PANEL</h5>
                    <h3 className="text-center">YOU ARE NOT AN ADMIN</h3>
                </div>
            </div>
            )

        }
        const transactions = "xLog Transactions";
        const users = "User Management";
        const network = "Network Info";
        return(
            <div>
                <div className="text-center">
                <h5 className="text-center">ADMIN PANEL</h5>
                    <ul className='align-items-center btn-group'>
                    <Switch>
                        <Route path="/admin/transactions">
                            <li className="btn-outline-dark btn active" type="radio"><Link to="/admin/transactions" style={{ color: '#fff' }}>{transactions}</Link></li>
                            <li className="btn-outline-dark btn btn"><Link to="/admin/users">{users}</Link></li>
                            <li className="btn-outline-dark btn btn"><Link to="/admin/network">{network}</Link></li>
                        </Route>
                        <Route path="/admin/users">
                            <li className="btn-outline-dark btn" ><Link to="/admin/transactions">{transactions}</Link></li>
                            <li className="btn-outline-dark btn btn active "><Link to="/admin/users" style={{ color: '#fff' }} >{users}</Link></li>
                            <li className="btn-outline-dark btn btn"><Link to="/admin/network">{network}</Link></li>

                        </Route>
                        <Route exact path="/admin">
                            <li className="btn-outline-dark btn active" type="radio"><Link to="/admin/transactions" style={{ color: '#fff' }}>{transactions}</Link></li>
                            <li className="btn-outline-dark btn btn "><Link to="/admin/users" >{users}</Link></li>
                            <li className="btn-outline-dark btn btn"><Link to="/admin/network">{network}</Link></li>
                        </Route>
                        <Route exact path="/admin/network">
                            <li className="btn-outline-dark btn" type="radio"><Link to="/admin/transactions" >{transactions}</Link></li>
                            <li className="btn-outline-dark btn "><Link to="/admin/users" >{users}</Link></li>
                            <li className="btn-outline-dark btn active"><Link to="/admin/network" style={{ color: '#fff' }}>{network}</Link></li>
                        </Route>
                    </Switch>
                </ul>
                </div>
                <div className="row">
                <Switch>
                    <Route exact path="/admin">
                        <ComplexListTransactions items={this.state.filtered} />
                    </Route>
                    <Route path="/admin/transactions">
                        <ComplexListTransactions items={this.state.filtered} />
                    </Route>
                    <Route path="/admin/users">
                        <ComplexListUsers users = {this.state.users}  />
                        <AddUser/>
                    </Route>
                    <Route path="/admin/network">
                        <NetworkInfo/>
                    </Route>
                </Switch>
                </div>

            </div>
        )
    }
}





export default Admin;