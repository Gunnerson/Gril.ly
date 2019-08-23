import React, { Component } from "react";
import { Redirect } from 'react-router';
import Button from "./Button";


class ItemSelection extends Component {
    state = {
        checkBoxSelected: null,
        price: 0,
        type: '',
        desc: '',
        grillData: {}
    }
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
        console.log('props',this.props.grills);
        console.log('state', this.state);
        let grillCounter = 0;

        if (this.props.selectedGrill) {
            return <Redirect to="/paymentpage" />
        }
      
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
                                {this.props.grills.filter(bbq => bbq.grillType === grill.type ).map((bbq, index) => {
                                    grillCounter++   
                                    return (
                                        <div key={index}>
                                        <div className="checkBox">
                                            <input
                                                type="checkbox"
                                                name="selectedGrill"
                                                checked={this.state.checkBoxSelected === grillCounter.toString()}
                                                value={grillCounter}
                                                onChange={e => 
                                                    {
                                                        console.log('e.target.value', e.target.value);
                                                        this.setState({
                                                    checkBoxSelected: e.target.value,
                                                    redirect: false,
                                                    price: bbq.price,
                                                    type: bbq.grillType,
                                                    description: bbq.description,
                                                    grillData: {
                                                        price: bbq.price,
                                                        type: bbq.grillType,
                                                        desc: bbq.description
                                                        }
                                                })}
                                            }
                                            />
                                        </div>
                                        <p>{bbq.grillType}</p>
                                        <p>{bbq.description}</p>
                                        <p>${bbq.price}</p>
                                    </div>
                                    )
                                }     
                            )}
                            </div>
                        ))}
                        <br /> 
                        <button className="btn-style" onClick={() => {
                            console.log('buttonClicked', this.state.grillData);
                            this.props.submitForm(this.state.grillData)
                        }} >Submit</button>
                       <br />

                    </div>
                </div>
            </div>
        );
    }
}


export default ItemSelection;