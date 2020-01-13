import React, {useState} from "react";
import Header from "./Header";

//import "./Login.css";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '',
        privateKey: ''};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const value = event.target.value;
        this.setState({
            [event.target.name]: value
        });
    }

    handleSubmit(event) {
        this.props.handleSubmit(this.state.email,this.state.privateKey);
    }

    //TODO database connection, differentiate between user levels, add routing switch based on user level


    render() {
        return (
            <div className="container-fluid text-center">
            <div className="row">
                <Header/>
            </div>
            <div className=" login-container">
                <div className="container-fluid">
                    <div className="col-md-8 login-form text-center">
                        <h3>Login</h3>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                Name:
                            </label>
                            <div className="form-group">
                                <input name="email" type="text" value={this.state.value} onChange={this.handleChange} className="form-control" placeholder="Your Email..."/>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" value={this.state.privateKey} placeholder="Your Private Key.. "  onChange={this.handleChange} name="privateKey"/>
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Submit" className="btnSubmit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}

export default Login;
