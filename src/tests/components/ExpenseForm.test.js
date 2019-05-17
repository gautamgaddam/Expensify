import React from 'react';
import { shallow } from 'enzyme';
import expenses from './../fixtures/expense';
import ExpenseForm from './../../components/ExpenseForm';
import moment from 'moment';


test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm />);

    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

    expect(wrapper).toMatchSnapshot();
});


test('should render error for invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
    const value = "New Description";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(wrapper.state('description')).toBe(value);
});

test('should set text on textarea change', () => {
    const value = "New text";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should set amount on input change', () => {
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
 
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper).toMatchSnapshot();
});

test('should not set amount on input change if input is invalid', () => {
    const value = "12.225";
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target: { value }
    });
 
    expect(wrapper.state('amount')).toBe('');
    expect(wrapper).toMatchSnapshot();
});

test('should call submit form when the form is submitted', ()=>{
    const onSubmitSpy= jest.fn();
    // onSubmitSpy('Gautam', 'Hyderabad');
    // expect(onSubmitSpy).toHaveBeenCalledWith('Gautam', 'Hyderabad');
  
    const wrapper= shallow(< ExpenseForm expense={expenses[0]} onSubmit= {onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenCalledWith({
        amount: expenses[0].amount,
        createdAt:expenses[0].createdAt,
        description:expenses[0].description,
        note:expenses[0].note
    });
});

test('should set new date on date change', ()=>{
    const now= new moment();
    const wrapper= shallow(<ExpenseForm />);
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
  
});

// test('should set calender focus on change', ()=>{
//     // const now= new moment();
//     const focus= true;
//     const wrapper= shallow(<ExpenseForm />);
//     wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({focus});
//     expect(wrapper.state('calendarFocused')).toBe(focus);

  
// });