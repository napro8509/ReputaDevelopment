import React from 'react'
import AuthContainer from '../AuthContainer'

import {LoginForm} from '../../components'

export default class Login extends AuthContainer {
    _renderContent() {
        return (
            <LoginForm/>
        );
    }
}
