import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";

const GetReceiversAddress = (props) => {
    const receiver = props.wizardContext;
    const { onAction } = props;
    return (
        <MuiThemeProvider>
            <ListSubheader color="primary">Enter Receiver's Address</ListSubheader>
            <TextField id="name" label="Full Name" type="text" margin="normal" value={receiver.name} onChange={onAction}/>
            <TextField id="street" label="Street" type="text" margin="normal" value={receiver.street} onChange={onAction}/>
            <TextField id="city" label="City" type="text" margin="normal" value={receiver.city} onChange={onAction}/>
            <TextField id="state" label="State" type="text" margin="normal" value={receiver.state} onChange={onAction}/>
            <TextField id="zip" label="Zip Code" type="text" margin="normal" value={receiver.zip} onChange={onAction}/>
        </MuiThemeProvider>
    );
};

GetReceiversAddress.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
};

export default GetReceiversAddress;
