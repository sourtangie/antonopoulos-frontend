import React from 'react';
import ComplexList from './components/ComplexList';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemService from "./api/ItemService";
import FormView from "./components/FormView";
import Header from "./components/Header";

class App extends React.Component {
    constructor(props){
        super(props);
        this.itemService = new ItemService();
        this.state = {
            list : [ {
                id: '213',
                data: 'Not Logged In...'}],
            key : ""
        }
    }
    init(key) {
        this.itemService.getAll(key).then(items => {
            this.setState({list: items});
            console.log("init="+this.state);
        });
    }
    changeValue(key) {
        this.setState(
            {
                key: key
            },
        );
        this.init(key);
    }


    render(){
    return(
    <div className="container-fluid app">
        <div className="row">
            <Header />
            <div className="col-lg-3 bg-dark header-padding">
            </div>
            <div className="col-lg-4 bg-dark header-padding">
            </div>
            <div className="col-lg bg-dark header-padding">
            <FormView changeValue={this.changeValue.bind(this)} />
            </div>
        </div>
        <div className="row">
            <div className="col-md-12">
        <ComplexList items={this.state.list} className="col-lg-2" />
            </div>
        </div>
    </div>

)}}

export default App;
