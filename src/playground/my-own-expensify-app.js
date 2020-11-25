import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const expensifyDefaultState = [];
const filtersDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

// ADD EXPENSE ACTION
const addExpense = ({ description = '', note = '', amount = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount
    }
});

// EDIT EXPENSE ACTION
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// REMOVE EXPENSE ACTION
const removeExpense = (id) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// SET FILTER TEXT ACTION
const setFiltersText = (text = '') => ({
    type: 'SET_FILTER_TEXT',
    text
});

// SORT BY ACTION
const sortBy = (sortedText = 'date') => ({
    type: 'SORT_BY',
    sortedText
});

// SET START DATE ACTION
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET END DATE ACTION
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

const expenseReducer = ((state = expensifyDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                    if (expense.id === action.id) {
                        return {
                            ...expense,
                            ...action.updates
                        }
                    } else {
                        return expense;
                    }
                });
        case 'REMOVE_EXPENSE':
            return state.filter((expense) => expense.id !== action.id);
        default:
            return state;
    }
});

const filtersReducer = (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return {
                ...state,
                text: action.text
            };
        case 'SORT_BY':
            return {
                ...state,
                sortBy: action.sortedText
            };
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            };
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters: filtersReducer
    })
);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})



/* const expenseOne = store.dispatch(addExpense({ description: 'rent', note: 'last salary', amount: 500}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffe', note: 'breakfast', amount: 150 }));

store.dispatch(editExpense(expenseOne.expense.id, { amount: 800 }));
store.dispatch(removeExpense(expenseTwo.expense.id)); */


store.dispatch(setFiltersText('rent'));
store.dispatch(sortBy('amount'));
store.dispatch(sortBy());

store.dispatch(setStartDate(150));
store.dispatch(setEndDate(-20));



// console.log(expenseOne);

// console.log(store.getState());