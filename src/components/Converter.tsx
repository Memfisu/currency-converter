import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setPairs } from '../reducers/dataSetter';
import { directions } from '../constants';
import CurrencySelector from './CurrencySelector';
import Result from './Result';
import Input from './Input';
import BaseCurrency from './BaseCurrency';

const Converter = () => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const dispatch = useDispatch();

    // todo
    useEffect(() => {
        setLoaded(false);
        axios.get('https://free.currconv.com/api/v7/currencies?apiKey=66959f82da7e8efc17eb')
            .then(res => {
                // @ts-ignore todo
                dispatch(setPairs(Object.values(res.data.results)));
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoaded(true);
            })
    }, [dispatch]);

    return loaded ? (
        <div className="converter-container">
            <div className="converter">
                <Input />
                <CurrencySelector direction={directions.FROM} />
                <span className="lead">{"=>"}</span>
                <CurrencySelector direction={directions.TO} />
                <span className="lead">{"="}</span>
                <Result />
            </div>
            <BaseCurrency />
        </div>
    ) : <div>Oh no</div>; // todo
}

export default Converter;
