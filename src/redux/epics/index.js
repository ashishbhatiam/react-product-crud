import { combineEpics } from 'redux-observable';
import productsEpic from './productEpic';

const epics = combineEpics(
	productsEpic
);

export default epics;