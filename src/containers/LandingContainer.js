import React from 'react'

import {LandingHeader} from '../components'
import BaseContainer from './BaseContainer'

export default class LandingContainer extends BaseContainer {

    _renderHeader() {
        return <LandingHeader/>;
    }

    _renderContent() {
        return null;
    }

    _renderFooter() {
        return null;
    }

    render() {
        return(
            <React.Fragment>
                {this._renderHeader()}
                {this._renderContent()}
                {this._renderFooter()}
            </React.Fragment>
        )
    }
}