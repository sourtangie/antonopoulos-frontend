import React, { Component } from "react";
import ComplexListTransactions from "./ComplexListTransactions";

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicKey : "",
            email:"",
            privateKey:"",
            privateKey_enc:"",
            user_level:this.props.user_level,
            public:this.props.public
        }
    }
    componentDidMount() {
    }

    render() {
            const handler = this.handler;
            if(this.props.user_level === 0){
                return (
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                )

            }else {
                return (
                    <div className="row">
                        <div className="col-md-12">
                            <ComplexListTransactions public={this.state.public} items={this.props.list}
                                                     className="col-lg-2"/>
                        </div>
                    </div>
                );
            }}
}
export default User;
