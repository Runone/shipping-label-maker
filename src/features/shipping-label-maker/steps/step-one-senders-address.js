import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";



const GetSendersAddress = (props) => {
    const sender  = props.wizardContext;
    const { onAction } = props;
    return (
        <MuiThemeProvider>
            <ListSubheader color="primary">Enter Sender's Address</ListSubheader>
            <TextField id="name" label="Full Name" type="text" margin="normal" value={sender.name} onChange={onAction}/>
            <TextField id="street" label="Street" type="text" margin="normal" value={sender.street} onChange={onAction}/>
            <TextField id="city" label="City" type="text" margin="normal" value={sender.city} onChange={onAction}/>
            <TextField id="state" label="State" type="text" margin="normal" value={sender.state} onChange={onAction}/>
            <TextField id="zip" label="Zip Code" type="text" margin="normal" value={sender.zip} onChange={onAction}/>
        </MuiThemeProvider>
    );
};

GetSendersAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
};

export default GetSendersAddress;

