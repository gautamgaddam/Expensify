import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';




store.subscribe(() => {
   const state= store.getState();
    const visisbleExpenses= getVisibleExpenses(state.expenses, state.filters);
    console.log(visisbleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'rent', amount: -100 }))
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: -300 }));
// const expenseThree = store.dispatch(addExpense({ description: 'Beer', amount: 500 }));
// const expenseFour = store.dispatch(addExpense({ description: 'Vodka', amount: 900 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { description: 'Pint', amount: '550' }));
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByDate());
store.dispatch(sortByAmount());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));
// console.log(expenseOne)
const demoState = {
    expenses: [{
        id: '97bsjksdk',
        description: 'January Rent',
        note: 'This was the final payment of Jan',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

