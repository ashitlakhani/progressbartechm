import React from 'react';
import { shallow } from 'enzyme';

import ButtonList from '../../src/components/Buttonlist';
import pbsFixture from '../testdata/pbs-fixtures';

describe('In components/Button-list.js Test Button-List: ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ButtonList hasChoosen={ '' }
            btns={ pbsFixture.buttons } />);
    });

    it('should render component ', () => {
        expect(wrapper).toMatchSnapshot();
    });
});
