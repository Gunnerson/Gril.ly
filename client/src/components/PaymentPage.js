import React, { Component } from "react";
import Payment from "./Payment";
// import Quantity from "./Quantity";
// import QuantityGrill from "./QuantityGrill";
// import GasGrillQuantity from "./GasGrillQuantity";
// import SmokerQuantity from "./SmokerQuanitity";

class PaymentPage extends Component {
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
                           Payment Page
                        </p>
                        {/* <QuantityGrill />
                        <GasGrillQuantity />
                        <SmokerQuantity /> */}
                        <br />
                        <Payment />
                       <br />

                    </div>
                </div>
            </div>
        );
    }
}


export default PaymentPage;