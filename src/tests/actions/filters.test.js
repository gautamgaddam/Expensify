import { setTextFilter, setEndDate, setStartDate, sortByAmount, sortByDate } from './../../actions/filters';
import moment from 'moment';


test('should set up text filter',()=>{
const action= setTextFilter('text');
expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text:'text'
    });
});


test('should set up sortByAmount ',()=>{
    const action= sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',
        });
    });

    test('should set up sortByDate ',()=>{
        const action= sortByDate();
        expect(action).toEqual({
            type: 'SORT_BY_DATE',
            });
        });





test('Shoud setup setEndDate expense object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });

});

test('Shoud setup setStartDate expense object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });

});