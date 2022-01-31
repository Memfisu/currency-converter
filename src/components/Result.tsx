import React from 'react';
import { useSelector } from 'react-redux';
import { resultSelector } from '../selectors/selectors';

const Result = () => {
    const result = useSelector(resultSelector);

    return result ? <span className="lead result">{result.toFixed(2)}</span> : null;
}

export default Result;
