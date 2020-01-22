import React, {Component} from "react";
import ComplexListTransactionsUser from "./ComplexListTransactionsUser";
import {connect} from 'react-redux';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import {getAllTransactions} from "../api/ItemService";


class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicKey: "",
            email: "",
            privateKey: "",
            privateKey_enc: "",
            filtered: [],

        }
    }

    componentDidMount() {
        this.setState({
            user_level: this.props.user_level
        });
        getAllTransactions().then(items => {
            this.setState({filtered: items});
        });
    }

    render() {
        let {user_level, email} = this.props;
        if (user_level === 2) {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <ComplexListTransactionsUser items={this.state.filtered} email={email}
                                                     className="col-lg-2"/>
                    </div>
                </div>
            );

        } else if (user_level === 1) {
            return (
                <div className="row">
                    <div className="col-md-12">
                        <ComplexListTransactionsUser items={this.state.filtered} email={email}
                                                     className="col-lg-2"/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row">
                    <div className="col-md-12">
                        NOT LOGGED IN
                    </div>
                </div>
            )

        }
    }
}

const mapStateToProps = (state) => {
    return {
        public_key: state.public_key,
        user_level: state.user_level,
        email: state.email
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
