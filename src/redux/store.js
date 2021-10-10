import { applyMiddleware, createStore, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from './reducers';
import epics from './epics/index';

const epicMiddleware = createEpicMiddleware(epics);
const middleware = [epicMiddleware, thunk, promise()];
const enhancers = [];

if (process.env.NODE_ENV === 'development') {
	enhancers.push(
		window.devToolsExtension ? window.devToolsExtension() : f => f,
	);
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(reducer, composedEnhancers);

export default store;