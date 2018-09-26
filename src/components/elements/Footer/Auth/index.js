import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class AuthFooter extends Component {

    constructor(props){
        super(props)
        this.state = {
            fixed: false
        }
        this.footer = React.createRef()

        this._setFooterPosition = this._setFooterPosition.bind(this);
    }

    componentDidMount() {
        this._setFooterPosition();
        window.addEventListener('resize', this._setFooterPosition);
    }

    componentWillUnmount(){
        window.removeEventListener('resize', this._setFooterPosition);
    }

    _setFooterPosition(){
        let windowHeight = window.innerHeight;
        let loginFormHeight = document.getElementById('loginForm').clientHeight;
        let footerHeight = this.footer.current.clientHeight;

        let margin = (windowHeight - loginFormHeight) / 2 - footerHeight - 60;
        let fixed = false;

        if (margin > 0) {
            fixed = true;
        }

        this.setState({
            fixed: fixed
        });
    }

    render() {
        return (
            <p ref={this.footer} className={this.state.fixed ? 'footer-fix footer-text' : 'footer-text'}>Chi tiết liên hệ: <Link to="/">reputa.vn</Link></p>
        )
    }
}