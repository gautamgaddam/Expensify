import React from 'react';
import {shallow} from 'enzyme';

import expenses from './../fixtures/expense';
import ExpenseListItem from './../../components/ExpenseListItem';


test('should render ExpenseListitem with empty message', ()=>{
    const wrapper= shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});