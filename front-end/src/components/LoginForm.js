import React from "react";
import {connect} from 'react-redux';
import {login} from '../redux/loginReducer';


//import "./Login.css";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    //TODO database connection, differentiate between user levels, add routing switch based on user level


    render() {
        let {email, private_key} = this.state;
        let {isLoginPending, isLoginSuccess, loginError} = this.props;
        let {public_key, user_level} = this.props;
        return (
            <div className="container-fluid text-center" style={isLoginSuccess ? {display: 'none'} : {}}>
                <div className=" login-container">
                    <div className="container-fluid">
                        <div className="col-md-8 login-form text-center">
                            <h3>Login</h3>
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Name:
                                </label>
                                <div className="form-group">
                                    <input name="email" type="text" value={email}
                                           onChange={e => this.setState({email: e.target.value})}
                                           className="form-control" placeholder="Your Email..."/>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" value={private_key}
                                           placeholder="Your Private Key.. "
                                           onChange={e => this.setState({private_key: e.target.value})}
                                           name="private_key"/>
                                </div>
                                <div className="form-group">
                                    <input type="submit" value="Submit" className="btnSubmit"/>
                                </div>
                                <div className="message">
                                    {isLoginPending && <div>Please wait...</div>}
                                    {isLoginSuccess && <div>Success.</div>}
                                    {loginError && <div>{loginError.message}</div>}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }

    handleSubmit(e) {
        e.preventDefault();
        let {email, private_key} = this.state;
        this.props.login(email, private_key);
        this.setState({
            email: '',
            private_key: ''
        })
    }
}

const mapStateToProps = (state) => {
    return {
        isLoginPending: state.isLoginPending,
        isLoginSuccess: state.isLoginSuccess,
        loginError: state.loginError,
        public_key: state.public_key,
        user_level: state.user_level
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, private_key) => dispatch(login(email, private_key)),
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
