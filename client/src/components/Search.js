import React, { Component } from "react";
import Calendar from "rc-calendar";
import { Button } from 'reactstrap';
import Axios from "axios";

class Search extends Component {
  state = {
    date: null
  };

    updateDate = (date) => {
        this.setState({ date: date});
        console.log(date)
        console.log("this date ^ ")

    }
        onSubmit = () => { 
            console.log(this.state.date)
            console.log("this date ^ ")
            Axios.get('/grill/', this.state.date)
                .then(response => console.log(response))
        }
  render() {
    return (
    <div style={{ height: "75vh" }} className="container valign-wrapper">
      <div className="row">
        Search
        <Calendar
          onChange={date => {
           this.updateDate(date)
          }}
        />
        <Button color="primary" size="sm" style={{marginTop: "50px" }} onClick={this.onSubmit} href="./ItemSelection">submit</Button>

      </div>
    </div>
    );
  }
}

// 1. when onchange method gets exec, take the date picked, place on our state (done) 
// 2. add submit button (done)
// 3. create special function for when submit gets clicked (done)
// 4. what happens in function, grab the date from state,call our server w/ date
// 5. build server on backend; make special route to accept request from front end (serverjs file)
// 6. with that front end info, call db, query for that date for availability
// 7. return information from server to front end
// 8. need logic to take info and put on the page

export default Search;
