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