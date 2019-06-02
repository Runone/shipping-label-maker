import React, { Component } from "react";

class ShippingLabelMaker extends Component {
    constructor(props) {
        super(props)
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

            </div>
        )
    }
}