import React, { Component } from "react";


class ConfirmationPage extends Component {
    render() {
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        {/* <h4>
                            <b>Gril.ly</b> {" "}
                            <span style={{ fontFamily: "monospace" }}>TIME</span>
                        </h4> */}
                        <p className="flow-text grey-text text-darken-1">
                           <b>Thank you for your order! Your Gril.ly item is available for pickup at 8:00 AM PT on date of purchase.</b>
                        </p>
                        <p><b>Please pick up at 1234 Main St. San Francisco CA, 94103</b></p>
                        
                       <br />

                    </div>
                </div>
            </div>
        );
    }
}


export default ConfirmationPage;