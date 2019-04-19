import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const ExpensesSummary = ({ expenseCount, expensesTotal, totalExpenses }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const invisibleExpenses = totalExpenses - expenseCount;
  const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,0.00');
  const expWord = invisibleExpenses === 1 ? 'expense' : 'expenses';
  const tense = invisibleExpenses === 1 ? 'is' : 'are';

  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
        <h3 className="page-header__title page-header__title--subtitle"><span>{invisibleExpenses}</span> {expWord} {tense} hidden</h3>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectExpensesTotal(visibleExpenses),
    totalExpenses: state.expenses.length
  };
};

export default connect(mapStateToProps)(ExpensesSummary);
