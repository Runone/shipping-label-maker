import React, { Component } from "react";

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: this.props.wizardContext,
            currentStep: 1
        };

        this.nextSteps = this.nextSteps.bind(this);
        this.previousSteps = this.previousSteps.bind(this);
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
    render() {
        return(
            <div>
                <h1>Shipping Label Maker</h1>
            </div>
        )
    }

}


export default Wizard;
