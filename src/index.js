import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import RootRouter from 'js/routes'
import store from 'js/stores/Store'

if (typeof (document) !== 'undefined' && window) {
    window.onload = () => {
        return render(
            <Provider store={store}>
                <RootRouter/>
            </Provider>,
            document.getElementById('app')
        )
    }
}
