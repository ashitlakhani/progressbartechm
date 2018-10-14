import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import pbsFixture from '../testdata/pbs-fixtures';
import { FETCH_PROGRESSBARS } from '../../src/types';
import * as actions from '../../src/actions';


const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('In actions/index.js -- Async actions: ', () => {
    let url, mStore, thenSpy, catchSpy;

    beforeEach(() => {
        mStore = mockStore({});
        mStore.clearActions();
        url = 'https://pb-api.herokuapp.com/bars';
        thenSpy = jest.fn();
        catchSpy = jest.fn();
    });

    test('should generate initialize progressbars data result.', () => {
        const pbs = pbsFixture;
        const set_Pbs = actions.setPbs(pbs);
        expect(set_Pbs).toEqual({
            type: FETCH_PROGRESSBARS,
            pbs
        });
    });

    it('should return result correctly via async call.', () => {
        return mStore.dispatch(actions.getPbs())
            .then(() => {
                const rz = mStore.getActions();
                expect(rz[0]).toEqual({
                    type: FETCH_PROGRESSBARS,
                    pbs: {
                        buttons: expect.any(Array),
                        bars: expect.any(Array),
                        limit: expect.any(Number)
                    }
                });
                expect(catchSpy).not.toHaveBeenCalled();
            });
    });
});
