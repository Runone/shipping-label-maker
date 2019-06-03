import React from "react";
import ListSubheader from "@material-ui/core/ListSubheader";

const GetShippingOptions = (props) => {
    const { onAction } = props;
    return (
        <div>
            <ListSubheader color="primary">Select Shipping Option</ListSubheader>
                <input id="shippingOption" name="shipping" type="radio" value="1" onChange={onAction} /> Ground
                <input id="shippingOption" name="shipping" type="radio" value="2" onChange={onAction} /> Priority

        </div>
    )
};

export default GetShippingOptions;