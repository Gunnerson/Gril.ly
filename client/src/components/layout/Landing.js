import React, { Component } from "react";
// import Calendar from "../Calendar";
import AppCarousel from "../AppCarousel";
// import DatePicker from "../DatePicker";
// import Button from "../Button";
import Search from "../Search";

class Landing extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <br />
                        <AppCarousel />
                        <br />
                        <p><b>Please enter a date or click on the calendar icon to reserve a BBQ</b></p>
                        <Search grills={this.props.grills} setGrills={this.props.setGrills} />
                        <br />
                    </div>
                </div>
            </div>
        );
    }
}

export default Landing;