import React, { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Link } from 'react-router-dom';
import BaseCurrency from './BaseCurrency';
import { useSelector } from 'react-redux';
import { baseCurrSelector } from '../selectors/selectors';
import Loader from './Loader';

const currForCourses = ['RUB', 'USD', 'EUR', 'GBP', 'CHF'];

const Courses = () => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const [result, setResult] = useState<PromiseSettledResult<AxiosResponse>[]>();
    const baseCurr = useSelector(baseCurrSelector);

    useEffect(() => {
        setLoaded(false);
        if (baseCurr) {
            const queries = currForCourses.map((item: string) =>
                axios.get(`https://free.currconv.com/api/v7/convert?q=${item}_${baseCurr}&compact=ultra&apiKey=66959f82da7e8efc17eb`));

            Promise.allSettled(queries).then(res => {

                setResult(res);
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => {
                    setLoaded(true);
                });
        }
    }, [baseCurr]);

    return (
        <div className="courses-container">
            <BaseCurrency />

            {loaded ?
                (<div className="currencies-table">
                    <div className="currencies-column">
                        <div className="lead result">валюта</div>
                        {/*{currForCourses?.map((item: string, index: number) => <div key={index} className="lead">{item}</div>)}*/}
                        <div className="lead">валюта</div>
                        <div className="lead">валюта</div>
                    </div>
                    <div className="currencies-column">
                        <div className="lead result">курс</div>
                        {/*{result?.map((item, index) =>*/}
                        {/*    <div key={index} className="lead">{`${Object.values(item?.value?.data)[0]} за 1 ${currForCourses[index]}`}</div>*/}
                        {/*)}*/}
                        <div className="lead">курс</div>
                        <div className="lead">курс</div>
                    </div>
                </div>)
                :  <Loader mini />}

            <Link className="nav-style lead" to="/">назад</Link>
        </div>
    )
}

export default Courses;
