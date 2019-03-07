import React from 'react';
import ExpenseDashboardPage from '../../components/Dashboard';
import { shallow } from 'enzyme';

test('Dashboard Page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});