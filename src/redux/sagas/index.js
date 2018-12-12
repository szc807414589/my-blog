import { fork, all, take } from 'redux-saga/effects'


export function* helloSaga() {
	console.log('Hello Sagas!');
}