import React from "react";
import { getShippingOption } from "../../../src/features/shipping-label-maker/shipping-cost.js";

const ShippingLabel = (props) => {
    const { from, to, weight, shippingOption } = props.data;
    return (
        <div>
            <h1>{getShippingOption(shippingOption)}</h1>
            <h3>From</h3>
            <p> {from.name} </p>
            <p> {from.street} </p>
            <p> {from.city} {from.state}, {from.zip} </p>
            <h4>To</h4>
            <p> {to.name} </p>
            <p> {to.street} </p>
            <p> {to.city} {to.state}, {to.zip} </p>
            <p></p>
            <p><h3>{weight} Lbs.</h3></p>
        </div>
    )
};

export default ShippingLabel;