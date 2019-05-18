import React from 'react'
import ReactDOM from 'react-dom'

//import para usar o redux
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import promise from 'redux-promise'

import App from './main/app'

//Impotação do Reducer
import reducers from './main/reducers'

//A linha abaixo sincroniza a aplicação com o plugin redux devtools dd Chrome
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

//criando a store(estado controlado pelo redux)
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('app'))