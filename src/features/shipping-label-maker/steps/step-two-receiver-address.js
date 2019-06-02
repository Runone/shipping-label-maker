import React from "react";

const GetReceiversAddress = (props) => {
    const receiver = props.wizardContext;
    const { onAction } = props;
    return (
        <div>
            <h4>Enter Receiver's Address</h4>
            <label>Name:</label>
            <input id="name" type="text" value={receiver.name} onChange={onAction} />
            <label>Street:</label>
            <input id="street" type="text" value={receiver.street} onChange={onAction}/>
            <label>City:</label>
            <input id="city" type="text" value={receiver.city} onChange={onAction}/>
            <label>State:</label>
            <input id="state" type="text" value={receiver.state} onChange={onAction}/>
            <label>Zip:</label>
            <input id="zip" type="text" value={receiver.zip} onChange={onAction}/>
        </div>
    )
};

export default GetReceiversAddress;