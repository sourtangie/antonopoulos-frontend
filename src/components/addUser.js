/**
 * Created by cassi on 28/11/19.
 */
import React from "react";
import ItemService from "../api/ItemService";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.itemService = new ItemService();
        this.state = {
            publicKey: "Generated key will be shown here...",
            privateKey: "Generated key will be shown here...",
            privateKey_enc: "Generated key will be shown here..."

        }
    }

    pushUser(email) {
        this.itemService.addUser(email).then(response => {
            console.log(response);

        });
    }

    changeValue(email) {
        this.pushUser(email);
    }

    handleChange(e) {
        e.preventDefault();
        if (e.target.key.value === "") {
            alert("Please input a valid email!")
        } else {
            this.changeValue(
                e.target.key.value,
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
                        <input className="form-control mr-md-2" type="search" name="key" placeholder="Email Address..."
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