import React from 'react';
import ComplexList from './components/ComplexList';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemService from "./api/ItemService";
import FormView from "./components/FormView"


class App extends React.Component {
    constructor(props){
        super(props);
        this.itemService = new ItemService();
        this.state = {
            list : [{}],
            key : ""
        }
    }
    init() {
        this.itemService.getAll().then(items => {
            this.setState({list: items});
            console.log(this.state);
        });
    }
    changeValue(key) {
        this.setState(
            {
                key: key
            },
        );
        this.init();
    }


    render(){
    return(
    <div className="App">
        <header className="App-header">
        <h1>Antonopoulos explorer</h1>
        </header>
        <FormView changeValue={this.changeValue.bind(this)} />
        <ComplexList items={this.state.list} />
    </div>

)}}

export default App;
