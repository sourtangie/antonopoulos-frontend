import React from 'react';
class ComplexList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filtered: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.setState({
            filtered: this.props.items
        });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.items
        });
    }

    handleChange(e) {
        let filteredItems = [];
        if (e.target.value !== "") {
            let currentItems = this.props.items;
            console.log(currentItems);
            filteredItems = currentItems.filter((item) => {
            let data = "data "+item.data.toLowerCase()+"transaction " + item.id + item.timestamp ;
            return data.includes(
                    e.target.value.toLowerCase());
        });
        this.setState({
            filtered: filteredItems
        });

        } else {
            filteredItems = this.props.items;
        }
        this.setState({
            filtered: filteredItems
        });
    }

    render() {
        return (
            <div>
                <div className="search">
                    <h2 className="title">Transactions</h2>
                    <input type="text" className="input" placeholder="Search by user ID, block ID or file ID..." onChange={this.handleChange}/>
                </div>
                <ul className="list-group">
                    {this.state.filtered.map(item => (
                        <li className="list-group-item" key={item.id}>
                            <div><h4>Transaction</h4></div>
                            <div><h5>Timestamp: {item.date} - {item.timestamp}</h5></div>
                            <div><h5>Payload:</h5> <p>{item.data}</p></div>
                            <div><h5>Address:</h5> <p>{item.address}</p></div>


                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComplexList;