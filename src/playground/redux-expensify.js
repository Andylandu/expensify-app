import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';





store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 1000, createdAt: 1000}));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: 500}));


/*

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense( expenseTwo.expense.id, { amount: 500 }));


store.dispatch(setTextFilter());

*/

store.dispatch(sortByAmount());
// store.dispatch(sortByDate()); 

// store.dispatch(setTextFilter('ffee'));

/* store.dispatch(setStartDate(0));
store.dispatch(setEndDate(200)); */

/*
store.dispatch(setStartDate());
 */


/* const demoState = {
    expenses: [{
        id: 'dfjfjhghdjjfd',
        description: 'January',
        note: 'Some text from january',
        amount: 4500,
        createdAt: 0
    }],
    filters: {
        text: 'from',
        sortBy: 'amount', // amount or date
        startDate: undefined,
        endDate: undefined
    }
} */



