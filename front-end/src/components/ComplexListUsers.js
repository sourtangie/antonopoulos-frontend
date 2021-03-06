import React from 'react';
import {getAllUsers} from "../api/ItemService";
import refreshIcon from "../img/refresh.png";

class ComplexListUsers extends React.Component {
    fullList;

    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
            users: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handler = this.handler.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        getAllUsers().then(items => {
            this.handler(items);
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.users !== prevProps.users) {
            this.setState({users: this.props.users});
            this.fullList = this.props.users;
        }
    }

    handler(value) {
        this.fullList = value;
        this.setState({users: value});
    }

    refresh() {
        getAllUsers().then(items => {
            this.handler(items);
        })
    }

    handleChange(e) {
        let filteredItems = [];
        if (e.target.value !== "") {
            let currentUsers = this.fullList;
            console.log(currentUsers);
            filteredItems = currentUsers.filter((user) => {
                let data = "data " + "transaction " + user.email.toLowerCase() + user.private_key.toLowerCase() + user.public_key.toLowerCase() + user.encrypted_key.toLowerCase();
                return data.includes(
                    e.target.value.toLowerCase());
            });
            this.setState({
                users: filteredItems
            });

        } else {
            filteredItems = this.fullList;
        }
        this.setState({
            users: filteredItems
        });
    }

    render() {

        return (
            <div className="col-12 col-lg-8">
                <div className="search bg-dark">
                    <a><img className="adminButton" src={refreshIcon} onClick={this.refresh} alt={"Refresh"}/></a>
                    <h2 className="title text-white">Users</h2>
                    <input className="form-control mr-sm-2" type="text"
                           placeholder="Search by user name, public Key or private Key..."
                           onChange={this.handleChange}/>
                </div>

                <ul className="list-group">
                    {this.state.users.map(user => (
                        <li className="list-group-item bg-light" key={user._id}>
                            <div className="d-flex w-100 justify-content-between"></div>
                            <div><h5 className="mb-1">User</h5> <p className="mb-1 overflow-auto">{user.email}</p></div>
                            <div><h5 className="mb-1">Private Key</h5> <p className="mb-1">{user.private_key}</p></div>
                            <div><h5 className="mb-1">Public Key</h5> <p className="mb-1">{user.public_key}</p></div>
                            <div><h5 className="mb-1">User Level</h5> <p className="mb-1">{user.user_level}</p></div>
                            <div><h5 className="mb-1">Encrypted Private Key</h5> <p
                                className="mb-1">{user.encrypted_key}</p></div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComplexListUsers;