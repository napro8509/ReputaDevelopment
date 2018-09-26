import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class LandingHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isShowSticker: false
        }

        this._setStickyHeader = this._setStickyHeader.bind(this);
    }

    componentDidMount() {
        this._setStickyHeader();
        window.addEventListener('scroll', this._setStickyHeader);
    }

    componentWillUnmount(){
        window.removeEventListener('scroll', this._setStickyHeader);
    }

    _setStickyHeader() {
        let sticky = 50;
        let status = false;

        if (window.pageYOffset >= sticky) {
            status = true;
        }

        this.setState({
            isShowSticker: status
        });
    }

    render() {
        return (
            <header id="header" className={this.state.isShowSticker ? 'sticky' : ''}>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <Link className="navbar-brand" to="/">
                            <img className="logo" alt="logo"
                                 src={require('../../../../assets/media/image/logo-white.svg')}/>
                            <p>Mở khóa thương hiệu - Đắp xây thương hiệu</p>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#header-nav"
                                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="header-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link scroll-link" href="#feature">Tính năng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll-link" href="#price">Báo giá</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll-link" href="#news">Tin tức</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link scroll-link" href="#contact">Liên hệ</a>
                                </li>
                                <li className="nav-item ml-4">
                                    <Link className="btn db-btn db-btn-blue text-uppercase" to="/login"
                                          id="btn-login">Đăng nhập</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}