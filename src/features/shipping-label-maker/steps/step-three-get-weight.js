import React from "react";
import PropTypes from "prop-types";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography/Typography";

const GetWeight = (props) => {
    const { weight }  = props.wizardContext;
    const { onAction } = props;
    return (
        <MuiThemeProvider>
            <ListSubheader color="primary">Enter Weight</ListSubheader>
            <TextField id="weight" label="Weight" type="text" value={weight} onChange={onAction}/>
            <Typography variant="h6" color="inherit">
                Pounds
            </Typography>
        </MuiThemeProvider>
    );
};

GetWeight.propTypes = {
    wizardContext: PropTypes.object.isRequired,
    onAction: PropTypes.func.isRequired,
};

export default GetWeight;
