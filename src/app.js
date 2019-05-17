import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store= configureStore();

// store.dispatch(addExpense({ description: 'Water Bill', amount: 5000, createdAt: 20  }));
// store.dispatch(addExpense({ description: 'Gas Bill', amount: 7000, createdAt: 50 }));
// store.dispatch(addExpense({ description: 'Power Bill', amount: 10000, createdAt: 30 }));


// // setTimeout(()=>{
// //     store.dispatch(setTextFilter('Bill'));
// //     console.log(state.expenses);
// // }, 3000);

console.log('test');
const state= store.getState();
const visisbleExpenses= getVisibleExpenses(state.expenses, state.filters);
console.log(visisbleExpenses);

const jsx =(
    <Provider store={store}>
        <AppRouter />
    </Provider>
   
);
ReactDOM.render( jsx, document.getElementById('app'));
