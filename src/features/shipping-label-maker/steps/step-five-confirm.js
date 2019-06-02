import React from "react";
import { getShippingCost, getShippingOption} from "../../../features/shipping-label-maker/shipping-cost.js";

const Confirm = (props) => {
    const { sender } = props.wizardContext.from;
    const { receiver } = props.wizardContext.to;
    const { weight } = props.wizardContext.weight;
    const { shippingOption } = props.wizardContext.shippingOption;
    const { onAction } = props;
    const confirmInfo = () => onAction(props.wizardContext);
    return (
        <div>
            <h4>Sender Information</h4>
            <p> Name: {sender.name} </p>
            <p> Street: {sender.street} </p>
            <p> City: {sender.city} </p>
            <p> State: {sender.state} </p>
            <p> Zip: {sender.zip} </p>
            <h4>Receiver Information</h4>
            <p> Name: {receiver.name} </p>
            <p> Street: {receiver.street} </p>
            <p> City: {receiver.city} </p>
            <p> State: {receiver.state} </p>
            <p> Zip: {receiver.zip} </p>
            <p>Weight: {weight} Lbs.</p>
            <p>Shipping option: {getShippingOption(shippingOption)}</p>
            <p>Shipping cost: ${getShippingCost(weight, shippingOption)}</p>
            <button onClick={confirmInfo}>Confirm</button>
        </div>
    )
};

export default Confirm;