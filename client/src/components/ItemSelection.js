import React, { Component } from "react";
import Button from "./Button";
import axios from "axios"

class ItemSelection extends Component {
    state={
        availableGrills: null,
        selectedGrill: null
    }

    componentDidMount(){
        axios.get("/grill")
        .then(grills => this.setState({availableGrills: grills.data}))
    }

    render() {
        console.log(this.props.grills)
        return (
            <div style={{ height: "75vh" }} className="container valign-wrapper">
                <div className="row">
                    <div className="col s12 center-align">
                        {this.state.availableGrills ?
                        this.state.availableGrills.map(grill => { 
                            
                            return <div>
                                <h1>
                                    {grill.grillType}
                                </h1>
                                <h2>
                                    {grill.grilldescription}
                                </h2>
                            </div>

                        }): 
                        <div></div>
                    }
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