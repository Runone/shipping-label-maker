import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../../core/header.js"

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: this.props.wizardContext,
            currentStep: 1
        };

        this.nextSteps = this.nextSteps.bind(this);
        this.previousSteps = this.previousSteps.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.success = this.success.bind(this);
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
    //handle input field changes to state
    handleStateChange(event) {
        const value = event.target.value;
        const id = event.target.getAttribute("id");
        this.setState({
            wizardContext: {...this.state.wizardContext, [id]: value}
        })
    }
    //handle complete label submission
    success(value) {
        this.props.onComplete(value);
    }

    render() {
        return(
            <div>
                <Header/>
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
