import { IData, IState } from '../interfaces/interfaces';

export const statusSelector = (state: IState): string => state.dataSetter!.status;

export const currSelector = (state: IState): IData[] => state.dataSetter!.pairs;

export const fromSelector = (state: IState): string => state.dataSetter!.from;

export const toSelector = (state: IState): string => state.dataSetter!.to;

export const amountSelector = (state: IState): number => state.dataSetter!.amount;

export const baseCurrSelector = (state: IState): string => state.dataSetter!.baseCurr;