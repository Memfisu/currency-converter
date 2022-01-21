import React from 'react';
import { useSelector } from 'react-redux';
import { statusSelector } from '../selectors/selectors';
import { Link } from 'react-router-dom';
import { directions, statuses } from '../constants';
import CurrencySelector from './CurrencySelector';
import Result from './Result';
import Input from './Input';
import BaseCurrency from './BaseCurrency';
import Loader from './Loader';

const Converter = () => {
    const status = useSelector(statusSelector);

    if (status !== statuses.DONE) return <Loader />;

    return (
        <div className="converter-container">
            <div className="converter">
                <Input />
                <CurrencySelector direction={directions.FROM} />
                <span className="lead">{"=>"}</span>
                <CurrencySelector direction={directions.TO} />
                <span className="lead">{"="}</span>
                <Result />
            </div>
            <div className="footer-container">
                <BaseCurrency />
                <Link className="nav-style lead" to="/courses">курсы валют</Link>
            </div>
        </div>
    );
}

export default Converter;
