import React, {ChangeEvent, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { baseCurrSelector, currSelector } from '../selectors/selectors';
import { IData } from '../interfaces/interfaces';
import { setFrom, setTo } from '../reducers/dataSetter';
import { directions } from '../constants';

const CurrencySelector = ({ direction }: { direction: string}) => {
    const list = useSelector(currSelector);
    const baseCurr = useSelector(baseCurrSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if (direction === directions.FROM && baseCurr) dispatch(setFrom(baseCurr))
    }, [baseCurr, direction, dispatch]);

    const handleChange = useCallback((event: ChangeEvent<HTMLSelectElement>) => {
        direction === directions.FROM ?
            dispatch(setFrom(event.target.value))
            : dispatch(setTo(event.target.value));
    }, [direction, dispatch]);

    return (
        <select className="form-control" onChange={handleChange}>
            <option>{' '}</option>
            {list?.map((item: IData) =>
                <option
                    key={item.id}
                    // todo варнинг в консоли
                    selected={direction === directions.FROM && item.id === baseCurr}
                >
                {item.id}
                </option>)
            }
        </select>
    );
}

export default CurrencySelector;
