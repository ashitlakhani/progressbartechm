import axios from 'axios';

import { FETCH_PROGRESSBARS } from '../types';
import { Constant } from '../consts/Numbers';

const url = 'https://pb-api.herokuapp.com/bars';


export const setPbs = (pbs = {}) => {
    if (Object.keys(pbs) !== Constant.ZERO) {
        pbs.bars = pbs.bars.map((elem, idx) => {
            return {
                pbId: `progbar${idx + Constant.ONE}`,
                val: elem
            };
        });
    }
    return {
        type: FETCH_PROGRESSBARS,
        pbs
    };
};

export const getPbs = () => {
    return (dispatch) => {
        return axios.get(`${url}`)
        .then((resp) => {
            if (resp) {
                dispatch(setPbs(resp.data));
            }
        })
        .catch((err) => {
            alert('error occured', err);
        });
    };
};
