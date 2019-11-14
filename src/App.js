import React from 'react';
import ComplexList from './components/ComplexList';
import './style/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemService from "./api/ItemService";



class App extends React.Component {
    constructor(props){
        super(props);
        this.itemService = new ItemService();
        this.state = {
            list : []
        }
    }
    init() {
        this.itemService.getAll().then(items => {
            this.setState({list: items});
        })
    }
    componentDidMount() {
        this.init();
    }


    render(){
    return(
    <div className="App">
        <header className="App-header">
        <h1>Antonopoulos explorer</h1>
        </header>
        <ComplexList items={this.state.list} />
    </div>

)}}

export default App;
