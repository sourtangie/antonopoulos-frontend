import React from 'react';
import FormView from "./FormView";
import User from "./User";
import {Route, Switch} from "react-router-dom";
import ItemService from "../api/ItemService";
class NetworkInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fullList: [],
            filtered:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handler = this.handler.bind(this);
        this.itemService = new ItemService();
    }

    componentDidMount() {
        this.itemService.getNetworkInfo().then(items => {
            this.handler(items);
    });
        this.setState({
            filtered:this.state.fullList
        })
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.items !== prevProps.items){
            this.setState({filtered: this.props.items});
        }
    }

    handler(value){
        console.log("dddddddd"+value)
        this.setState({fullList:value});
    }

    handleChange(e) {
        let filteredItems = [];
        if (e.target.value !== "") {
            let currentItems =this.state.fullList;
            console.log(currentItems);
            filteredItems = currentItems.filter((item) => {
                let data = "data "+"transaction " + item.header.batcher_public_key.toLowerCase()
                     +item.header.family_name.toLowerCase()
                    +item.header.family_version.toLowerCase() +item.header.inputs +item.header.outputs +item.header.signer_public_key.toLowerCase() +this.itemService.decryptData(item.payload).toLowerCase();
                return data.includes(
                    e.target.value.toLowerCase());
            });
            this.setState({
                filtered: filteredItems
            });

        } else {
            filteredItems = this.state.fullList;
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
                    <h2 className="title text-white">Network Info</h2>
                    <input className ="form-control mr-sm-2" type="text" placeholder="Search..." onChange={this.handleChange}/>
                </div>
                <ul className="list-group">
                    {this.state.filtered.map(item => (
                        <li className="list-group-item bg-light" key={item.id}>
                            <div className="d-flex w-100 justify-content-between"><h4 className="mb-1"></h4>
                                <small className="font-weight-bold">Timestamp: {item.timestamp}</small></div>
                            <div><h5 className="mb-1">Batcher Public Key</h5> <p className="mb-1 overflow-auto">{item.header.batcher_public_key}</p></div>
                            <div><h5 className="mb-1">Dependencies</h5> <p className="mb-1">{item.header.dependencies}</p></div>
                            <div><h5 className="mb-1">Transaction family</h5> <p className="mb-1">{item.header.family_name + " " +item.header.family_version}</p></div>
                            <div><h5 className="mb-1">Inputs</h5> <p className="mb-1">{item.header.inputs}</p></div>
                            <div><h5 className="mb-1">Nonce:</h5> <p className="mb-1">{item.header.nonce}</p></div>
                            <div><h5 className="mb-1">Outputs:</h5> <p className="mb-1">{item.header.outputs}</p></div>
                            <div><h5 className="mb-1">Signer Public Key:</h5> <p className="mb-1">{item.header.signer_public_key}</p></div>
                            <div><h5 className="mb-1">Payload:</h5> <p className="mb-1">{item.payload}</p></div>





                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default NetworkInfo;