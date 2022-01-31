import { IData, IAction, IState } from '../interfaces/interfaces';
import { actions, statuses } from '../constants';

const initData = () => ({
    type: actions.INIT,
});

const setPairs = (data: IData[]): IAction => ({
    type: actions.PAIRS,
    payload: data
});

const setFrom = (currFrom: string): IAction => ({
    type: actions.FROM,
    payload: currFrom
});

const setTo = (currTo: string): IAction => ({
    type: actions.TO,
    payload: currTo
});

const setAmount = (amount: string): IAction => ({
    type: actions.AMOUNT,
    payload: amount
});

const setResult = (result: number): IAction => ({
    type: actions.RESULT,
    payload: result
});

const setBaseCurrency = (curr: string): IAction => ({
    type: actions.BASE,
    payload: curr
});

const dataSetter = (state: IState = {}, action: IAction) => {
    switch (action.type) {
        case actions.INIT:
            return {
                ...state,
                status: statuses.EMPTY
            };
        case actions.PAIRS:
            return {
                ...state,
                pairs: action.payload,
                status: statuses.DONE
            };
        case actions.FROM:
            return { ...state, from: action.payload };
        case actions.TO:
            return { ...state, to: action.payload };
        case actions.AMOUNT:
            return { ...state, amount: action.payload };
        case actions.BASE:
            return { ...state, baseCurr: action.payload };
        case actions.RESULT:
            return { ...state, result: action.payload };
        default:
            return state;
    }
};

export {
    initData,
    setPairs,
    setFrom,
    setTo,
    setAmount,
    setBaseCurrency,
    setResult
};
export default dataSetter;