import React from 'react';
import {connect} from 'react-redux';
import {DateRangePicker} from 'react-dates';
import {setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate} from '../actions/filters';


class ExpenseListFilters extends React.Component{
    state={
        calenderFocused:null,
    };
    onDatesChange=({startDate, endDate})=>{
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };
    onFocusChange=(calenderFocused)=>{
        this.setState(()=> ({calenderFocused}));
    };
    onSortChange= (e)=>{
        if(e.target.value==='date'){
              this.props.sortByDate();
            
        }else if(e.target.value==='amount'){
            this.props.sortByAmount();
        }
    }
    onTextChange= (e)=>{
        this.props.setTextFilter(e.target.value);
     }

render (){
    return (
        <div>
            <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
            <select 
                value={this.props.filters.sortBy}
                onChange={this.onSortChange}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
                
            </select>
            <DateRangePicker
                startDate= {this.props.filters.startDate}
                startDateId={'startDateID'} 
                endDateId={'endDateID'} 
                endDate= {this.props.filters.endDate}
                onDatesChange= {this.onDatesChange}
                focusedInput={this.state.calenderFocused}
                onFocusChange={this.onFocusChange}
                numberOfMonths={1}
                showClearDates={true}
                isOutsideRange= { ()=>false }

            />
        </div>
    );
}
}

const mapStateToProps=(state)=>({
    filters: state.filters
})

const mapDispatchToProps= (dispatch, props)=>({
    setTextFilter: (text)=>dispatch(setTextFilter(text)),
    sortByDate: ()=> dispatch(sortByDate()),
    sortByAmount:()=> dispatch(sortByAmount()),
    setStartDate:(startDate)=>dispatch(setStartDate(startDate)),
    setEndDate:(endDate)=>dispatch(setEndDate(endDate)),
  });
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);