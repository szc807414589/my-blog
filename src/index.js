import React from 'react';
import ReactDOM from 'react-dom';
import App from './router'
// import {Router} from 'react-router-dom'
// import history from './history'
import {Provider} from 'react-redux'
import './index.css';
import './assets/css/reset.less'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
	<Provider>
		<App/>
	</Provider>,
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
