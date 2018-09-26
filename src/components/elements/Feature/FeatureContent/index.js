import React, {Component} from 'react';
import PropTypes from "prop-types";

/**
 * type: left, right
 */
export default class FeatureContent extends Component {
    static propTypes = {
        type: PropTypes.string,
        icon: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.array,
    }

    static defaultProps = {
        type: 'left',
        icon: '',
        title: '',
        desc: []
    }

    _renderContent() {
        return (
            <div className='feature-content-inner'>
                <h6>{this.props.title}</h6>
                {this.props.desc.map((item, index) => {
                    return <p key={'desc-' + index}>{item}</p>
                })}
            </div>
        )
    }

    _renderIcon() {
        return (
            <img src={this.props.icon} alt=""/>
        )
    }

    render() {
        return (
            <div className={'feature-content ' + this.props.type}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-6'>
                            {this.props.type === 'left' ? this._renderContent() : this._renderIcon()}
                        </div>
                        <div className='col-md-6'>
                            {this.props.type === 'left' ? this._renderIcon() : this._renderContent()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}