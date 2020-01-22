import React from 'react';
import {Route, Switch} from "react-router-dom";
import {getAllTransactions} from "../api/ItemService";
import refreshIcon from "../img/refresh.png";

class ComplexListTransactionsUser extends React.Component {
    fullList;

    constructor(props) {
        super(props);
        this.state = {
            filtered: this.props.items,
            public: this.props.public
        };
        this.handler = this.handler.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        this.fullList = this.props.items;
        this.setState({
            filtered: this.fullList,
        });
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.items !== prevProps.items) {
            this.handler(this.props.items);
        }
    }

    //refresh button
    refresh() {
        getAllTransactions().then(items => {
            this.handler(items);
        })
    }

    handler(value) {
        this.fullList = value;
        value = value.filter((item) => {
            let data = item.username.toLowerCase();
            return data.includes(
                this.props.email.toLowerCase());
        });
        this.setState({filtered: value});
    }

    render() {
        return (
            <div className="col-lg">
                <div className="search bg-dark">
                    <a><img className="adminButton" src={refreshIcon} onClick={this.refresh} alt={"Refresh"}/></a>
                    <Switch>
                        <Route path="/admin">
                            <h2 className="title text-white">All xLog Transactions</h2>
                        </Route>
                        <Route path="/user">
                            <h2 className="title text-white">Personal xLog Transactions</h2>
                        </Route>
                    </Switch>
                </div>
                <ul className="list-group">
                    {this.state.filtered.map(item => (
                        <li className="list-group-item bg-light" key={item.id}>
                            <div className="d-flex w-100 justify-content-between">
                                <small className="font-weight-bold">Timestamp: {item.timestamp}</small></div>
                            <div><h5 className="mb-1">User:</h5> <p
                                className="mb-1">{item.username.substr(0, item.username.length - 3)}</p></div>
                            <div><h5 className="mb-1">Document:</h5> <p className="mb-1">{item.docName}</p></div>
                            <div><h5 className="mb-1">Address:</h5> <p className="mb-1">{item.address}</p></div>


                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComplexListTransactionsUser;