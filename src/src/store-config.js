import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

import rReducers from './reduxers';

const storeWithMiddleware = applyMiddleware(thunk)(createStore)(
    rReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default storeWithMiddleware;
