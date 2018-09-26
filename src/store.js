import {createStore, applyMiddleware} from 'redux'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import saga from './sagas'

const persistConfig = {
    key: 'primary',
    storage,
    blacklist: []
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()

const getMiddleware = () => {
    if (process.env.BABEL_ENV === 'production') {
        return applyMiddleware(sagaMiddleware)
    } else {
        return applyMiddleware(
            createLogger(),
            sagaMiddleware
        )
    }
}

export default () => {
    let store = createStore(
        persistedReducer,
        composeWithDevTools(getMiddleware())
    )
    let persistor = persistStore(store)

    sagaMiddleware.run(saga)

    return {store, persistor}
}