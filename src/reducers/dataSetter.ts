import { IData, IAction, IState } from '../interfaces/interfaces';
import { actions } from '../constants';

const setPairs = (data: IData): IAction => ({
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

const setBaseCurrency = (curr: string): IAction => ({
    type: actions.BASE,
    payload: curr
});

const dataSetter = (state: IState = {}, action: IAction) => {
    switch (action.type) {
        case actions.PAIRS:
            return { ...state, pairs: action.payload };
        case actions.FROM:
            return { ...state, from: action.payload };
        case actions.TO:
            return { ...state, to: action.payload };
        case actions.AMOUNT:
            return { ...state, amount: action.payload };
        case actions.BASE:
            return { ...state, baseCurr: action.payload };
        default:
            return state;
    }
};

export { setPairs, setFrom, setTo, setAmount, setBaseCurrency };
export default dataSetter;