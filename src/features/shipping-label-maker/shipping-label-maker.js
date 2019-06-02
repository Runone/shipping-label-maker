import React, { Component } from "react";
import Wizard from "../../../src/core/components/wizard/wizard.js"
import Header from "../../../src/core/header.js";

class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            shippingInfo: {
                from: {
                    name: "",
                    street: "",
                    city: "",
                    state: "",
                    zip: ""
                },
                to: {
                    name: "",
                    street: "",
                    city: "",
                    state: "",
                    zip: ""
                },
                weight: "",
                shippingOption: 1
            }
        };
        this.createLabel = this.createLabel.bind(this);
    }
    createLabel(data) {
        this.setState({
            data: data,
            isComplete: true
        })
    }
    render() {
        return (
            <div>
                <Wizard header={Header} wizardContext={this.state} onComplete={this.createLabel}/>
            </div>
        )
    }
}

export default ShippingLabelMaker;