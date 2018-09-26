import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import routeConfigs from "../../../constants/routeConfigs";
import {login} from "../../../actions/auth";
import {connect} from "react-redux";

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: 'test_viettel',
            password: 'vietteL#4575',
            showMessage: false,
            errorMessage: '&nbsp;'
        }

        this._onSubmit = this._onSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.loggedIn !== prevProps.loggedIn) {
            if (this.props.loggedIn) {
                window.location.reload();
            } else {
                this.setState({
                    showMessage: true,
                    errorMessage: 'Thông tin đăng nhập không đúng!'
                })
            }
        }
    }

    _onSubmit = e => {
        e.preventDefault();

        let username = this.state.username.trim()
        let password = this.state.password.trim()

        if (username && password) {
            this.props.onLogin({
                username: this.state.username,
                password: this.state.password
            })
        } else {
            this.setState({
                showMessage: true,
                errorMessage: 'Vui lòng nhập đầy đủ thông tin!'
            })
        }
    }

    render() {
        return (
            <div id='loginForm' className="login-form">
                <div className="login-header">
                    <Link to={routeConfigs.home.path} className="logo">
                        <img src={require('../../../assets/media/image/logo.svg')} alt="logo"/>
                    </Link>
                </div>
                <div className="login-content">
                    <div className="login-content-inner">
                        <div className={"alert alert-danger " + (this.state.showMessage ? 'visible' : 'invisible')}
                             role="alert">
                            {this.state.errorMessage}
                        </div>
                        <form onSubmit={this._onSubmit}>

                            <input className="form-control" type="text" placeholder="Tên đăng nhập"
                                   value={this.state.username}
                                   onChange={e => this.setState({username: e.target.value})}/>

                            <input className="form-control" type="password" placeholder="Mật khẩu"
                                   value={this.state.password}
                                   onChange={e => this.setState({password: e.target.value})}/>


                            <button type="submit" className="btn btn-primary btn-block btn-blue-bold"
                                    onClick={this._login}>Đăng nhập
                            </button>
                        </form>

                        <Link to={routeConfigs.forgotPass.path} className="forgot-link">Quên mật khẩu?</Link>
                    </div>
                    <div className="login-bg login-bg-1"></div>
                    <div className="login-bg login-bg-2"></div>
                    <div className="login-bg login-bg-3"></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticating: state.auth.isAuthenticating,
        loggedIn: state.auth.loggedIn
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: userInfo => dispatch(login(userInfo)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
