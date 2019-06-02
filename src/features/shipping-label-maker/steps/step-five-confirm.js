import React from "react";
import { getShippingCost, getShippingOption} from "../../../features/shipping-label-maker/shipping-cost.js";

const Confirm = (props) => {
    const { from } = props.wizardContext;
    const { to } = props.wizardContext;
    const { weight } = props.wizardContext;
    const { shippingOption } = props.wizardContext;
    const { onAction } = props;
    const confirmInfo = () => onAction(props.wizardContext);
    return (
        <div>
            <h4>Sender Information</h4>
            <p> Name: {from.name} </p>
            <p> Street: {from.street} </p>
            <p> City: {from.city} </p>
            <p> State: {from.state} </p>
            <p> Zip: {from.zip} </p>
            <h4>Receiver Information</h4>
            <p> Name: {to.name} </p>
            <p> Street: {to.street} </p>
            <p> City: {to.city} </p>
            <p> State: {to.state} </p>
            <p> Zip: {to.zip} </p>
            <p>Weight: {weight.weight} lbs.</p>
            <p>Shipping option: {getShippingOption(shippingOption.shippingOption)}</p>
            <p>Shipping cost: ${getShippingCost(weight.weight, shippingOption.shippingOption)}</p>
            <button onClick={confirmInfo}>Confirm</button>
        </div>
    )
};

export default Confirm;