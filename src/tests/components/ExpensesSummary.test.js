import React from 'react';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';

test('1 expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={50043}/>);
    expect(wrapper).toMatchSnapshot();
});

test('3 expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={3} expensesTotal={1250043}/>);
    expect(wrapper).toMatchSnapshot();
});

