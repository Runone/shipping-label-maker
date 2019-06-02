import React from "react";

const NavButtons = props => {
    const { current, nextSteps, previousSteps } = props;

    return (
        <div>
            {current === 1 ? null : (
                <button onClick={previousSteps}>Back</button>
            )}
            {current > 4 ? null : (
                <button onClick={nextSteps}>Next</button>
            )}
        </div>
    )
};

export default NavButtons;