import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { amountSelector, fromSelector, toSelector } from '../selectors/selectors';

const Result = () => {
    const from = useSelector(fromSelector);
    const to = useSelector(toSelector);
    const amount = useSelector(amountSelector);

    const [loaded, setLoaded] = useState<boolean>(false);
    const [result, setResult] = useState<number>(0);

    useEffect(() => {
        setLoaded(false);
        if (from && to) {
            axios.get(`https://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=66959f82da7e8efc17eb`)
                .then(res => {
                    setResult(res.data[`${from}_${to}`]);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setLoaded(true);
                });
        }
    }, [from, to]);

    return loaded && amount && result ? <span className="lead result">{amount * result}</span> : null;
}

export default Result;
