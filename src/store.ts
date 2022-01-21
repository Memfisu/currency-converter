import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from '@redux-devtools/extension';
import dataSetter  from './reducers/dataSetter';
import rootSaga from './rootSaga';

const saga = createSagaMiddleware();

const reducers = combineReducers ({
    dataSetter
});

const store = createStore(
    reducers,
    {},
    composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;