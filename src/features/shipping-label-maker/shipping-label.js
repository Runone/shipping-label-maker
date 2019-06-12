import React from "react";
import { getShippingOption } from "../../../src/features/shipping-label-maker/shipping-cost.js";
import { MuiThemeProvider } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

const ShippingLabel = (props) => {
    const { from, to, weight, shippingOption } = props.data;
    return (
        <MuiThemeProvider>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h2" color="inherit">
                        <Box fontFamily="Monospace">
                        Shipping Label
                        </Box>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Typography variant="h4" color="inherit">
                <Box fontFamily="Monospace">
                    Shipping Option:{getShippingOption(shippingOption.shippingOption)}
                </Box>
            </Typography>
            <Typography>
                <Box fontFamily="Monospace" fontSize="h4.fontSize" m={1}>
                From
                </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>{from.name} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>{from.street} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>{from.city} {from.state}, {from.zip} </Box>
            </Typography>
            <Typography>
                <Box fontFamily="Monospace" fontSize="h4.fontSize" m={1}>
                To
                </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>{to.name} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>{to.street} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>{to.city} {to.state}, {to.zip} </Box>
            </Typography>
            <Typography component="div">
                <Box fontFamily="Monospace" fontSize="h3.fontSize" m={1}>{weight.weight} Lbs</Box>
            </Typography>
        </MuiThemeProvider>
    );
};

export default ShippingLabel;