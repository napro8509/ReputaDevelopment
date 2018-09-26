import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';

import routeConfigs from './constants/routeConfigs';

class App extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <Switch>
                {Object.keys(routeConfigs).map(pathName => (
                    <Route {...routeConfigs[pathName]} key={`route-${pathName}`}/>
                ))}
            </Switch>

        );
    }
}

export default withRouter(App);
