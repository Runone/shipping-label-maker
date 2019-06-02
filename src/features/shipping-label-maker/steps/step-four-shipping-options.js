import React from "react";

const GetShippingOptions = (props) => {
    const { onAction } = props;
    return (
        <div>
            <h4>Select Shipping Option</h4>
            <form>
                <input id="shippingOption" name="shipping" type="radio" value="1" onChange={onAction} /> Ground
                <input id="shippingOption" name="shipping" type="radio" value="2" onChange={onAction} /> Priority
            </form>
        </div>
    )
};

export default GetShippingOptions;