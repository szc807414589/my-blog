import React from 'react';
import ReactDOM from 'react-dom';
import App from './router'
// import {Router} from 'react-router-dom'
// import history from './history'
import rootReducer from './redux/reducers'
import {createStore,applyMiddleware,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './redux/sagas'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// 利用redux-logger打印日志
import {createLogger} from 'redux-logger'
import './index.css';
import './assets/css/reset.less'
import * as serviceWorker from './serviceWorker';

let redux_devTool = window.devToolsExtension ?
	window.devToolsExtension():
	f => f
const store = createStore(
	rootReducer,
	redux_devTool
)

console.log(store.getState())

ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
