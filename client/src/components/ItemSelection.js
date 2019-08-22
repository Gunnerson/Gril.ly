import React, { Component } from "react";
import Button from "./Button";

class ItemSelection extends Component {
    grillMap = [{
        type: "Charcoal Grill (S)",
        image: "http://pkelliher.imgix.net/BBQReg.jpg?w=200&h=200"
    },{
        type: "Propane Grill (M)",
        image:  "http://pkelliher.imgix.net/GasGrillSm.jpg?w=200&h=200"
},{
        type: "Propane Grillmeister (XL)",
        image: "http://pkelliher.imgix.net/GasGrillLG.jpg?w=200&h=200"
}, {
        type: "Smokeysmoketastic (M)",
        image: "http://pkelliher.imgix.net/SmokerNew.jpg?w=200&h=200"   
    }
    ]    
    
    render() {
        console.log(this.props.grills)
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        <p className="flow-text grey-text text-darken-1">
                           Item Selection Page
                        </p>
                        {this.grillMap.map(grill => (
                            <div key={grill.type}>
                        <img src={grill.image} alt={grill.type} />
                        {this.props.grills.filter(bbq => bbq.grillType === grill.type ).map((bbq, index) => <p key={index}>bbq.description</p>)}
                            </div>
                        ))}
                        <br />
                        <Button />
                       <br />

                    </div>
                </div>
            </div>
        );
    }
}


export default ItemSelection;