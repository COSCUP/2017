import { createStore, compose, applyMiddleware } from 'redux'
import { reduxReactFirebase } from 'redux-react-firebase'
import thunk from 'redux-thunk'
import promiseMiddleware from 'redux-promise'
import rootReducer from '../reducers'
import DevTools from '../containers/DevTools'

function configureStore () {
    const middleware = [thunk, promiseMiddleware]

    const config = {
        apiKey: 'AIzaSyAHoi4_xyfD5JxzFGAZ9ljdebnJmdWwiZA',
        authDomain: 'coscup-2017.firebaseapp.com',
        databaseURL: 'https://coscup-2017.firebaseio.com',
        projectId: 'coscup-2017',
        storageBucket: 'coscup-2017.appspot.com',
        messagingSenderId: '806009974223'
    }

    const finalCreateStore = compose(
        reduxReactFirebase(config),
        applyMiddleware(...middleware),
        DevTools.instrument(),
        window.devToolsExtensio ? window.devToolsExtension() : f => f
    )(createStore)

    const store = finalCreateStore(rootReducer)

    if (module.hot) {
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers')
            store.replaceReducer(nextRootReducer)
        })
    }

    return store
}

export default configureStore()
