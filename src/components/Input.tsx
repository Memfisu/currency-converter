import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setAmount } from '../reducers/dataSetter';

const Input = () => {
    const dispatch = useDispatch();

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(setAmount(event.target.value));
    }

    return <input type="number" className="form-control curr-input" onChange={handleChange} />;
}

export default Input;
