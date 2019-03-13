import React from 'react';
import selectTotalExpenses from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';
import numeral from 'numeral';
import { connect } from 'react-redux';

export const ExpensesSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses';
    const formattedTotal = numeral(props.expensesTotal/100).format('$0,0.00');
    return (
        <div>
            <h1>Viewing {props.expenseCount} {expenseWord} totalling {formattedTotal}</h1>
        </div>
    );
};

const mapStateToProps = (state,props) => {
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    return {
        expenseCount:  visibleExpenses.length,
        expensesTotal: selectTotalExpenses(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpensesSummary);