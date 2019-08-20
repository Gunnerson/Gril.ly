//Is this necessary? The calendar and inline CSS are on Search,js

import React, { Component } from 'react';
import Calendar from 'react-calendar';
 
class MyApp extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          // onClickDay={this.onClickDay}
          // value={}
        />
      </div>
    );
  }
}

export default Calendar;