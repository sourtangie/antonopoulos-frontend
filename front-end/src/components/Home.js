import ItemService from "../api/ItemService";
import React, { Component } from "react";
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";




class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {user_level} = this.props;
        if (user_level !== 2) {
            return (
                <div>
                    <LoginForm/>
                </div>
            );
        } else {
            return (
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
}
const mapStateToProps = (state) => {
    return{
        user_level: state.user_level
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);