import React from 'react'
import ReactDOM from 'react-dom'

//import para usar o redux
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './main/app'

//Impotação do Reducer
import reducers from './main/reducers'

//criando a store(estado controlado pelo redux)
const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))