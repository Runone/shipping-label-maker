import React from "react";

const GetSendersAddress = (props) => {
    const sender = props.wizardContext;
    const { onAction } = props;
    return (
        <div>
            <h4>Enter Sender's Address</h4>
            <label>Name:</label>
            <input id="name" type="text" value={sender.name} onChange={onAction} />
            <label>Street:</label>
            <input id="street" type="text" value={sender.street} onChange={onAction}/>
            <label>City:</label>
            <input id="city" type="text" value={sender.city} onChange={onAction}/>
            <label>State:</label>
            <input id="state" type="text" value={sender.state} onChange={onAction}/>
            <label>Zip:</label>
            <input id="zip" type="text" value={sender.zip} onChange={onAction}/>
        </div>
    )
};

export default GetSendersAddress;


