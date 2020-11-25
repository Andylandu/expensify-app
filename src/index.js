import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';



const store = configureStore();


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);




const expenseOne = store.dispatch(addExpense({ description: 'Water bill', note: 'Nothing', amount: 400, createdAt: 12 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gaz bill', note: 'For myself', amount: 350, createdAt: 17 }));
const expenseThree = store.dispatch(addExpense({ description: 'Milk bill', note: 'For my Mom', amount: 500, createdAt: 14 }));

/* store.dispatch(setTextFilter('water'));

setTimeout(() => {
    store.dispatch(setTextFilter('bill'))
}, 3000);
 */

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const rootEl = document.getElementById('app');

ReactDOM.render(jsx, rootEl);


