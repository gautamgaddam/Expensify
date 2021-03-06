import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseListFilters} from './../../components/ExpenseListFilters';
import {altFilters, filters} from './../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(()=>{
    setTextFilter=jest.fn();
    sortByDate=jest.fn();
    sortByAmount=jest.fn();
    setStartDate=jest.fn();
    setEndDate=jest.fn();
    wrapper= shallow(<ExpenseListFilters filters={filters} setTextFilter={setTextFilter} removeExpense={removeExpense} expense={expenses[2]}/>);
    });


