import React, {Component} from 'react';
import PropTypes from 'prop-types';

/**
 * type: blue, cyan
 */
export default class Hr extends Component {
    static propTypes = {
        type: PropTypes.string
    }

    static defaultProps = {
        type: 'blue'
    }

    render() {
        return (
            <div className={'hr ' + this.props.type}></div>
        )
    }
}