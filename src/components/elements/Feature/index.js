import React, {Component} from 'react';

export default class Feature extends Component {

    render() {
        return (
            <div className='feature'>
                {this.props.children}
            </div>
        )
    }
}