import React, { Component } from "react";
import ShippingLabelMaker from "./features/shipping-label-maker/shipping-label-maker.js";

class App extends Component {
    render() {
        return (
            <div>
                <ShippingLabelMaker />
            </div>
        );
    }
}

export default App;