import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import routeConfigs from '../constants/routeConfigs'

export default function (ComposedComponent) {
    class Guest extends Component {
        render() {
            if (!this.props.loggedIn) {
                return <ComposedComponent {...this.props} />;
            }

            return (
                <Redirect to={routeConfigs.dashboard.path}/>
            );
        }
    }

    const mapStateToProps = state => ({
        loggedIn: state.auth.loggedIn
    });
    return connect(mapStateToProps)(Guest)
}
