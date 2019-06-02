import React, { Component } from "react";

class StepOneSendersAddress extends Component {
    render() {
         const { onAction } = this.props;
         const sendersInfo = this.props.wizardContext.from;

         return (
             <div>
                 <h3>Enter Senders Information</h3>
                 <input
                     id="from"
                     type="text"
                     onChange={onAction}
                     value={sendersInfo.name}
                 />
             </div>
         )
    }
}

export default StepOneSendersAddress;



