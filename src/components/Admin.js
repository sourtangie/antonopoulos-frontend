import ItemService from "../api/ItemService";
import React, { Component } from "react";


class Admin extends Component {
    constructor(props) {
        super(props);
        this.itemService = new ItemService();
        this.state = {
            list: [{
                id: '213',
                data: 'Not Logged In...'
            }],
            key: ""
        }
    }
    render(){
        return(
            <div>
                <h5>ADMIN PANEL</h5>
            </div>
        )
    }
}





export default Admin;