export interface IData {
    currencyName: string;
    currencySymbol?: string;
    id: string
}

export interface IAction {
    type: string;
    payload: IData[] | string | number;
}

export interface IState {
    dataSetter?: {
        pairs: IData[],
        status: string,
        from: string,
        to: string,
        amount: number,
        baseCurr: string,
        result: number
    };
}