import { combineReducers } from 'redux';
import pbsReducer from './reducer_progressbars';

const RootReducer = combineReducers({
	pbs: pbsReducer
});

export default RootReducer;
