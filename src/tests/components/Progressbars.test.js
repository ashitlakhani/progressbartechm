import React from 'react';
import { shallow } from 'enzyme';

import { Progressbars } from '../../src/components/Progressbars';
import barsArr from '../testdata/barsArr-fixtures';
import { RedBarArr } from '../testdata/singleBarItem-fixture';

describe('In Progressbars Test ', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Progressbars bars={ barsArr } limit={ 160 } />);
    });

    it('should render component correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should be changed to red when over limit.', () => {
        const wrapperWithRedBar = shallow(<Progressbars bars={ RedBarArr } limit={ 160 } />);
        const thePb = wrapperWithRedBar.find('Progress');
        expect(thePb.prop('color')).toBe('danger');
    });
});
