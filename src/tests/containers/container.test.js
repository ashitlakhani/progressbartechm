import React from 'react';
import {
	shallow
} from 'enzyme';
import configureMockStore from 'redux-mock-store';

import {
	Container
} from '../../src/containers/container';
import { origState } from '../testdata/initState-fixture';

describe('In containers/Assemblage.js Test Assemblage: ', () => {
    let wrapper, getPbsSpy;
    beforeEach(() => {
        getPbsSpy = jest.fn();
        wrapper = shallow( <Container getPbs = { getPbsSpy } /> );
    });

    it('should render component correctly.', () => {
        expect(wrapper).toMatchSnapshot();
    });

});
