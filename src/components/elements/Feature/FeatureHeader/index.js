import React, {Component} from 'react';
import {Hr} from '../../../../components';
import PropTypes from "prop-types";

/**
 * type: light, dark
 */
export default class FeatureLanding extends Component {
    static propTypes = {
        type: PropTypes.string,
        title: PropTypes.string,
        desc: PropTypes.string,
    }

    static defaultProps = {
        type: 'light',
        title: '',
        desc: ''
    }

    render() {
        return (
            <div className='feature-header'>
                <h5>{this.props.title}</h5>
                <Hr/>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}