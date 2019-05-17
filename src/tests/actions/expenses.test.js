import { addExpense, editExpense, removeExpense } from '../../actions/expenses';


test('Shoud setup remove expense object', () => {
    const action = removeExpense({ id: '123abc' });
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });

});


test('Shoud setup edit expense object', () => {
    const action = editExpense('123abc', { note: 'new note updated' });
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'new note updated'
        }
    });
});


test('Should setup add expense object', () => {
    const expenseData = {
        description: 'Rent',
        note: 'add expense',
        amount: 1000,
        createdAt:123
    }

    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        
        }
    });
});


test('Should setup add expense object with default values', () => {
   
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
           
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt:0
        
        }
    });
});