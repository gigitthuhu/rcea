import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';
import numeral from 'numeral';

export const ExpensesSummery = (props) => (
    <div>
      <h2>Selected {props.expenses.length} with total of: {numeral(props.total / 100).format('$0,0.00')}</h2>
    </div>
)

const mapStateToProps = (state) => {
    const selected = selectExpenses(state.expenses, state.filters);
    return {
      expenses: selected,
      total: selectExpensesTotal(selected)
    };
  };
  
  export default connect(mapStateToProps)(ExpensesSummery);