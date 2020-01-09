import React, { Component } from "react";
import ItemService from "../api/ItemService";
import Header from "./Header";
import FormView from "./FormView";
import ComplexList from "./ComplexList";
import App from "../App";

class User extends Component {
    constructor(props) {
        super(props);
        this.itemService = new ItemService();
        this.state = {
            list : [ {
                id: '213',
                data: 'Not Logged In...'}],
            key : "",
            logged_in:"0"
        }
    }
    handler(value){
        this.setState({filtered:value});
    }
        render() {
            const handler = this.handler;
            return (
                <div className="row">
                    <div className="col-md-12">
                        <ComplexList items={this.state.list} handler = {handler.bind(this)} className="col-lg-2" />
                    </div>
                </div>
        );
    }
}
export default User;
