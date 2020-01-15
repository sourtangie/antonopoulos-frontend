import React from 'react';
import FormView from "./FormView";
import User from "./User";
import {Route, Switch} from "react-router-dom";
import {getAllTransactions} from "../api/ItemService";
import refreshIcon from "../img/refresh.png";
class ComplexListTransactionsAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: this.props.items,
            public:this.props.public
        };
        this.handleChange = this.handleChange.bind(this);
        this.handler = this.handler.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount() {
        this.fullList = this.props.items;
        console.log(this.props.public);
        this.setState({
            filtered: this.props.items,
        });
}
componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.items !== prevProps.items){
            this.setState({filtered: this.props.items});
            this.fullList = this.props.items;
        }
}

    fullList;
    handler(value){
        this.fullList = value;
        this.setState({filtered:value});
    }
    init() {
       getAllTransactions().then(items => {
            this.handler(items);
        });
    }
    refresh(){
        getAllTransactions().then(items => {
            this.handler(items);
            console.log("refreeeeesh")
        })
    }

    handleChange(e) {
        let filteredItems = [];
        if (e.target.value !== "") {
            let currentItems =this.fullList;
            console.log(currentItems);
            filteredItems = currentItems.filter((item) => {
            let data = "data "+"transaction " + item.username.toLowerCase() + item.timestamp.toLowerCase() +item.address.toLowerCase() +item.username.toLowerCase() +item.docName.toLowerCase() +item.logNumber.toLowerCase();
            return data.includes(
                    e.target.value.toLowerCase());
        });
        this.setState({
            filtered: filteredItems
        });

        } else {
            filteredItems = this.fullList;
        }
        this.setState({
            filtered: filteredItems
        });
    }

    render() {
        const handler = this.handler;
        return (
            <div className="col-lg">
                <div className="search bg-dark">
                    <a><img className="adminButton" src={refreshIcon}onClick={this.refresh}/></a>
                    <Switch>
                        <Route path= "/admin">
                    <h2 className="title text-white">All xLog Transactions</h2>
                        </Route>
                        <Route path = "/user">
                            <h2 className="title text-white">Personal xLog Transactions</h2>
                        </Route>
                    </Switch>
                            <input className ="form-control mr-sm-2" type="text" placeholder="Search by user ID, block ID or file ID..." onChange={this.handleChange}/>
                </div>
                <ul className="list-group">
                    {this.state.filtered.map(item => (
                        <li className="list-group-item bg-light" key={item.id}>
                            <div className="d-flex w-100 justify-content-between"><h4 className="mb-1"></h4>
                            <small className="font-weight-bold">Timestamp: {item.timestamp}</small></div>
                            <div><h5 className="mb-1">User:</h5> <p className="mb-1">{item.username}</p></div>
                            <div><h5 className="mb-1">Document:</h5> <p className="mb-1">{item.docName}</p></div>
                            <div><h5 className="mb-1">Address:</h5> <p className="mb-1">{item.address}</p></div>


                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComplexListTransactionsAdmin;