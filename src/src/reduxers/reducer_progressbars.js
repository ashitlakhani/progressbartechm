import { FETCH_PROGRESSBARS } from '../types';

const INIT_PROGRESSBARS = {};

export default (state = INIT_PROGRESSBARS, action) => {
	switch (action.type) {
		case FETCH_PROGRESSBARS:
			return { ...state, ...action.pbs };
		default:
			return state;
	}
};
