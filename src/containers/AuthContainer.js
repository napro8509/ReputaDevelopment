import React from 'react'

import BaseContainer from './BaseContainer'
import {AuthFooter} from '../components'

class LandingContainer extends BaseContainer {
    componentDidMount() {
        document.body.classList.add('authenticate')
    }

    componentWillUnmount() {
        document.body.classList.remove('authenticate')
    }

    _renderContent() {
        return null
    }

    render() {
        return (
            <React.Fragment>
                {this._renderContent()}
                <AuthFooter/>
            </React.Fragment>
        )
    }
}

export default LandingContainer;