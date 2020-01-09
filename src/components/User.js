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
            key : ""
        }
    }
    init(key) {
        this.itemService.getAll(key).then(items => {
            this.setState({list: items});
            console.log("init="+this.state);
        });
    }
    changeValue(key) {
        this.setState(
            {
                key: key
            },
        );
        this.init(key);
    }
        render() {
        return (
                <div className="row">
                    <div className="col-md-12">
                        <ComplexList items={this.state.list} className="col-lg-2" />
                    </div>
                </div>
        );
    }
}
export default User;
