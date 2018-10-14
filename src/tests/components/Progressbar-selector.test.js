import React from 'react';
import { shallow } from 'enzyme';

import ProgressbarSelector from '../../src/components/Progressbar-selector';
import barsArr from '../testdata/barsArr-fixtures';

describe('In Progressbar-selector test ', () => {
    let wrapper, noBarSelectedWrapper, selectPbSpy;

    beforeEach(() => {
        selectPbSpy = jest.fn();
        wrapper = shallow(<ProgressbarSelector hasSelectedPb={ barsArr[0].pbId } bars={ barsArr } selectPbById={ selectPbSpy } />);
        noBarSelectedWrapper = shallow(<ProgressbarSelector hasSelectedPb={ '' } bars={ barsArr } />);
    });

    it('should render prog bar selector', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
