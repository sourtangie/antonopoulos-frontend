import ItemService from "../api/ItemService";
import React, { Component } from "react";
import {Link} from "react-router-dom";


class Home extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
            <div className="row">
                <div className="col-md-3">
                <h5>Welcome!</h5>
            </div>
            </div>
                <div className="row">
                    <div className="col-md-3">
                    <Link to="/user">User Panel</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <Link to="/admin">Admin Panel</Link>
                    </div>
                    </div>
            </div>

        )
    }
}





export default Home;