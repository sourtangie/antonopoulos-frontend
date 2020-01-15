/**
 * Created by cassi on 28/11/19.
 */
import React from "react";

class AddUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            publicKey: "Generated key will be shown here...",
            privateKey: "Generated key will be shown here...",
            privateKey_enc: "Generated key will be shown here...",
            userlvl: "2",

        }
    }
    async addUser(email, userlvl){
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json; charset=utf-8');
        const link = 'https://xlogchain.nl:3000/users/';
        fetch(link, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({requester: email, userlvl: this.state.userlvl})
        }).then(response => {
            if(!response.ok){
                console.log('error' + response);
            }
            return response.json();
        }).then(json => {
            this.handler(json)
        })
    }
    handler(keys){
            // this.setState({publicKey:data.public_key, privateKey: data.private_key, privateKey_enc:data.encrypted_key});
        this.setState({
            publicKey: keys.public_key,
            privateKey:keys.private_key,
            privateKey_enc:keys.encrypted_key,
        });
    }

    changeValue(email) {
        this.addUser(email).then(r =>
        console.log(r));
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