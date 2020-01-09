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
            let data = "data "+item.data.toLowerCase()+"transaction " + item.id + item.timestamp +item.address ;
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
                <div className="search bg-dark">
                    <h2 className="title text-white">Transactions</h2>
                    <input className ="form-control mr-sm-2" type="text" placeholder="Search by user ID, block ID or file ID..." onChange={this.handleChange}/>
                </div>
                <ul className="list-group">
                    {this.state.filtered.map(item => (
                        <li className="list-group-item bg-light" key={item.id}>
                            <div className="d-flex w-100 justify-content-between"><h4 className="mb-1"></h4>
                            <small className="font-weight-bold">Timestamp: {item.date} @ {item.timestamp}</small></div>
                            <div><h5 className="mb-1">Payload:</h5> <p className="mb-1 overflow-auto">{item.data}</p></div>
                            <div><h5 className="mb-1">Address:</h5> <p className="mb-1">{item.address}</p></div>


                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComplexList;