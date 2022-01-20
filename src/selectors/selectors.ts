import { IData, IState } from '../interfaces/interfaces';

// @ts-ignore todo
export const currSelector = (state: IState): { pairs: IData[] } | undefined => state.dataSetter.pairs;
// @ts-ignore todo
export const fromSelector = (state: IState): string => state.dataSetter.from;
// @ts-ignore todo
export const toSelector = (state: IState): string => state.dataSetter.to;
// @ts-ignore todo
export const amountSelector = (state: IState): number => state.dataSetter.amount;
// @ts-ignore todo
export const baseCurrSelector = (state: IState): string => state.dataSetter.baseCurr;