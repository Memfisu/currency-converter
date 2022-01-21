import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBaseCurrency } from '../reducers/dataSetter';

const BaseCurrency = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState<string>('');

    const baseCurr = ['RUB', 'USD', 'EUR'];

    useEffect(() => {
        dispatch(setBaseCurrency(value));
    }, [dispatch, value]);

    return (
        <div className="base-currency">
            <span className="lead">базовая валюта</span>

            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                {
                    baseCurr.map((item: string, index: number) => (
                        <label className="btn btn-secondary" key={item} onClick={() => setValue(item)}>
                            <input type="radio" name="baseCurr" />
                            {item}
                        </label>
                    ))
                }
            </div>
        </div>


    );
}

export default BaseCurrency;
