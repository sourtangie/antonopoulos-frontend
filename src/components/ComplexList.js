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
            let block = "block ";
            let currentItems = this.props.items;
            filteredItems = currentItems.filter((item) => {
            let data = item.content.toLowerCase() + item.id + item.user_key + item.timestamp +block;
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
                            <div><h4>Block {item.id}</h4></div>
                            <div><h5>User {item.user_key}</h5></div>
                            <div><p>{item.content}</p></div>
                            <div><p>At: {item.timestamp}</p></div>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default ComplexList;