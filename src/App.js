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
            list : [ {
                id: '213',
                payload: 'Edited file ID FBI-9102',
                user_key: '1cf1266e282c41be5e4254d8820772c5518a2c5a8c0c7f7ade19594a7eb539453e1ed7',
                timestamp: "11-07 22:30",
            },
                {
                    id: '214',
                    payload: 'Edited file ID CIA-2001',
                    user_key: '1cf1266e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7',
                    timestamp: "12-07 22:30",
                },{
                    id: '215',
                    payload: 'Edited file ID AIVD-10291',
                    user_key: '1cf1266e282c41be5e4254d8820772c5518a2c5a8c0c7f7aed19594a7eb539453e1ed7',
                    timestamp: "12-07 23:30",
                },{
                    id: '216',
                    payload: 'Edited file ID FBI-8000',
                    user_key: '1cf1266e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19794a7eb539453e1ed7',
                    timestamp: "13-07 10:30",
                },{
                    id: '217',
                    payload: 'Edited file ID USAF-567',
                    user_key: '1cf1266e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda18594a7eb539453e1ed7',
                    timestamp: "13-07 22:30",
                },{
                    id: '218',
                    payload: 'Edited file ID MI6-1780',
                    user_key: '1cf1266e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453a1ed7',
                    timestamp: "14-07 22:30",
                },]
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
