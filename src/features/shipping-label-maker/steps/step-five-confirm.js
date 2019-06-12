import React from "react";
import { getShippingCost, getShippingOption} from "../../../features/shipping-label-maker/shipping-cost.js";
import { MuiThemeProvider } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const Confirm = (props) => {
    const { from } = props.wizardContext;
    const { to } = props.wizardContext;
    const { weight } = props.wizardContext;
    const { shippingOption } = props.wizardContext;
    const { onAction } = props;
    const confirmInfo = () => onAction(props.wizardContext);
    return (
        <MuiThemeProvider>
            <ListSubheader color="primary">Sender Information</ListSubheader>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Name: {from.name} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Street: {from.street} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>City: {from.city} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>State: {from.state} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Zip Code: {from.zip} </Box>
            </Typography>
            <ListSubheader color="primary">Receiver Information</ListSubheader>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Name: {to.name} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Street: {to.street} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>City: {to.city} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>State: {to.state} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Zip Code: {to.zip} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Weight: {weight.weight} lbs</Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Shipping Option: {getShippingOption(shippingOption.shippingOption)} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>Shipping Cost: ${getShippingCost(weight.weight, shippingOption.shippingOption)} </Box>
            </Typography>
            <Button variant="contained" color="primary" onClick={confirmInfo}>Confirm</Button>
        </MuiThemeProvider>
    );
};

export default Confirm;