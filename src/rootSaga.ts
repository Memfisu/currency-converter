import axios from 'axios';
import { put, spawn, select, takeEvery } from 'redux-saga/effects';
import { initData, setPairs, setResult } from './reducers/dataSetter';
import { IData } from './interfaces/interfaces';
import { amountSelector, fromSelector, toSelector } from './selectors/selectors';
import { actions } from './constants';

function* initDataSagaWorker() {
    yield put(initData());
    const { data } = yield axios.get('https://free.currconv.com/api/v7/currencies?apiKey=66959f82da7e8efc17eb');
    const pairs: IData[] = yield Object.values(data.results);
    if (pairs?.length) yield put(setPairs(pairs));
}

function* sagaResultHandler() {
    const from: string = yield select(fromSelector);
    const to: string = yield select(toSelector);
    const amount: number = yield select(amountSelector);
    if (from && to) {
        const { data } = yield axios.get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=66959f82da7e8efc17eb`)
        put(setResult(data[`${from}_${to}`] * amount));
    }
}

// доработать
function* sagaCurrChangeHandler() {
    yield takeEvery(actions.FROM, sagaResultHandler);
    yield takeEvery(actions.TO, sagaResultHandler);
    yield takeEvery(actions.AMOUNT, sagaResultHandler);
}

export default function* rootSaga () {
    yield spawn(initDataSagaWorker);
    yield spawn(sagaCurrChangeHandler);
}
