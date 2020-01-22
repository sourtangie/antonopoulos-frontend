/**
 * Created by cassi on 28/11/19.
 */
import React from "react";
import {addUser} from "../api/ItemService";


class AddUser extends React.Component {
    constructor(props) {
        super(props);
        const waitingForInput = "Generate key will be show here...";
        this.state = {
            publicKey: waitingForInput,
            privateKey: waitingForInput,
            privateKey_enc: waitingForInput,

        }
    }

    handler(keys) {
        this.setState({
            publicKey: keys.public_key,
            privateKey: keys.private_key,
            privateKey_enc: keys.encrypted_key,
        });
    }

    changeValue(email, user_level) {
        addUser(email, user_level).then(r =>
            console.log(r));
    }

    handleChange(e) {
        e.preventDefault();
        if (e.target.email.value === "") {
            alert("Please input a valid email!")
        } else {
            let email = e.target.email.value;
            let user_level = parseInt(e.target.user_level.value, 10);
            this.changeValue(
                email,
                user_level
            );
        }
    };

    render() {
        return (
            <div className="col-6 col-md-4  float-right addUser">
                <div className="search bg-dark">
                    <h5 className="text-center text-white">Add User: </h5>
                    <form className="justify-content-md-center form-inline" onSubmit={this.handleChange.bind(this)}>
                        <div>
                            <input className="form-control mr-md-2" type="search" name="email"
                                   placeholder="Email Address..."
                                   aria-label="Search"/>
                            <input className="form-control mr-md-2 input_user_level" type="search" name="user_level"
                                   placeholder="User Level (1 or 2)"
                                   aria-label="Search"/>
                            <button className="btn btn-outline-success" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="displayKeys text-center">
                    <ul className="list-group list-unstyled">
                        <li className="list-group-item">
                            <div>
                                <label className="col-form-label-sm font-weight-bold">Public Key:</label>
                                <p>{this.state.publicKey}</p>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div>
                                <label className="col-form-label-sm font-weight-bold">Private Key:</label>
                                <p>{this.state.privateKey}</p>
                            </div>
                        </li>
                        <li className="list-group-item">
                            <div>
                                <label className="col-form-label-sm font-weight-bold">Encrypted Private Key:</label>
                                <p>{this.state.privateKey_enc}</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default AddUser;