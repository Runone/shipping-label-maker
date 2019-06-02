import React from "react";

const GetShippingOptions = (props) => {
    const { onAction } = props;

    return (
        <div>
            <h4>Select Shipping Option</h4>
            <select id="Shipping" name="shippingOption" onChange={onAction}>
                <option onChange={onAction} name="shippingOption" value="1">ground</option>
                <option onChange={onAction} name="shippingOption" value="2">priority</option>
            </select>
        </div>
    )
};

export default GetShippingOptions;