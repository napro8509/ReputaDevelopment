import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import {BrowserRouter} from 'react-router-dom'
import {PersistGate} from 'redux-persist/integration/react'

import storeConfig from './store'

let {store, persistor} = storeConfig()

ReactDOM.render((
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <BrowserRouter
                    forceRefresh={false}>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    ), document.getElementById('root')
);

registerServiceWorker()
