import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const data = [
    {
        bg: require('../../../assets/media/image/slide-1.jpg'),
        title: 'Làm sao để kiểm soát thông tin trên internet mỗi ngày?',
        desc: [
            'Khách hàng nói gì về sản phẩm của bạn?',
            'Đối thủ sắp tới của bạn đang làm gì?',
            'Xu hướng sắp tới ra sao?'
        ]
    },
    {
        bg: require('../../../assets/media/image/slide-2.jpg'),
        title: 'Đừng lo, đã có Reputa',
        desc: [
            'Cung cấp góc nhìn 360 về danh tiếng trực tuyến, phân tích, quản lý và nắm bắt nhu cầu khách hàng.'
        ]
    }
];

export default class Slide extends Component {
    _renderIndicator() {
        return (
            <ol className="carousel-indicators">
                {data.map((item, index) => {
                    return (<li data-target="#header-carousel" data-slide-to={index} key={index}
                                className={index === 0 ? 'active' : ''}></li>)
                })}
            </ol>
        )
    }

    _renderSlide() {
        return (
            <div className="carousel-inner">
                {data.map((item, index) => {
                    return (
                        <div className={'carousel-item ' + (index === 0 ? 'active' : '')} key={index}>
                            <img className="d-block w-100" src={item.bg}
                                 alt="First slide"/>
                            <div className='container'>
                                <div className="carousel-caption d-md-block">
                                    <h5>{item.title}</h5>

                                    {item.desc.map((d, i) => {
                                        return <p key={index + '-' + i}>{d}</p>
                                    })}

                                    <div className="action">
                                        <p>Click để trải nghiệm!</p>
                                        <Link className="btn db-btn db-btn-lg db-btn-blue" to='/login'>Dùng thử
                                            miễn phí</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return (
            <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">

                {this._renderIndicator()}
                {this._renderSlide()}

                <a className="carousel-control-prev" href="#header-carousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"><i
                            className="icon-arrow-left"></i></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#header-carousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"><i
                            className="icon-arrow-right"></i></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        )
    }
}