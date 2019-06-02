import React from "react";

const GetWeight = (props) => {
    const size  = props.wizardContext;
    const { onAction } = props;
    return (
        <div>
            <h4>Enter Weight</h4>
            <input id="weight" type="text" value={size.weight} onChange={onAction}/> Pounds
        </div>
    )
};

export default GetWeight;