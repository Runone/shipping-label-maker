import React, { Component } from "react";
import PropTypes from "prop-types";


class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: this.props.wizardContext,
            currentStep: 1
        };

        this.nextSteps = this.nextSteps.bind(this);
        this.previousSteps = this.previousSteps.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    //proceed to next steps
    nextSteps() {
        const { currentStep } = this.state;
        this.setState({
            currentStep: currentStep + 1
        })
    }
    //go back previous steps
    previousSteps() {
        const { currentStep } = this.state;
        this.setState({
            currentStep: currentStep - 1
        })
    }
    //handle input field changes
    handleChange = input => (event) => {
        this.setState({
            [input]: event.target.value
        })
    };
    render() {
        return(
            <div>
                <h1>Shipping Label Maker</h1>
            </div>
        )
    }

}

Wizard.propTypes = {
    header: PropTypes.func.isRequired,
    steps: PropTypes.array.isRequired,
    wizardContext: PropTypes.object.isRequired,
    onComplete: PropTypes.func.isRequired
};


export default Wizard;
