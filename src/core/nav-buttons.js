import React from "react";
import Button from "@material-ui/core/Button";

const NavButtons = props => {
    const { current, nextSteps, previousSteps } = props;
    return (
        <div>
            {current === 1 ? null : (
                <Button variant="contained" color="secondary" onClick={previousSteps}>Back</Button>
            )}
            {current > 4 ? null : (
                <Button variant="contained" color="primary" onClick={nextSteps}>Next</Button>
            )}
        </div>
    )
};

export default NavButtons;