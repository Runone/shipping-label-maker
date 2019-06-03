import React, { Component } from "react";
import PropTypes from "prop-types";
import Header from "../../../core/header.js"
import NavButtons from "../../../core/nav-buttons.js";
import GetSendersAddress from "../../../features/shipping-label-maker/steps/step-one-senders-address.js"
import GetReceiversAddress from "../../../features/shipping-label-maker/steps/step-two-receiver-address.js";
import GetWeight from "../../../features/shipping-label-maker/steps/step-three-get-weight.js";
import GetShippingOptions from "../../../features/shipping-label-maker/steps/step-four-shipping-options.js";
import Confirm from "../../../features/shipping-label-maker/steps/step-five-confirm.js";

class Wizard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wizardContext: this.props.wizardContext,
            currentStep: 1
        };

        this.nextSteps = this.nextSteps.bind(this);
        this.previousSteps = this.previousSteps.bind(this);
        this.handleSender = this.handleSender.bind(this);
        this.handleReceiver = this.handleReceiver.bind(this);
        this.handleWeight = this.handleWeight.bind(this);
        this.shipping = this.shipping.bind(this);
        this.success = this.success.bind(this);
        this.wizardSteps = this.wizardSteps.bind(this);
    }

    //proceed to next steps
    nextSteps(event) {
        event.preventDefault();
        const {currentStep} = this.state;
        this.setState({
            currentStep: currentStep + 1
        })
    }

    //go back previous steps
    previousSteps(event) {
        event.preventDefault();
        const {currentStep} = this.state;
        this.setState({
            currentStep: currentStep - 1
        })
    }

    //handle input field changes to from sender
    handleSender(event) {
        const value = event.target.value;
        const id = event.target.getAttribute("id");
        this.setState(state => ({
            ...state, wizardContext: {
                ...state.wizardContext, from: {...state.wizardContext.from, [id]: value}
            }
        }))
    }

    //handle input field changes to receiver
    handleReceiver(event) {
        const value = event.target.value;
        const id = event.target.getAttribute("id");
        this.setState(state => ({
            ...state, wizardContext: {
                ...state.wizardContext, to: {...state.wizardContext.to, [id]: value}
            }
        }))
    }

    //handle weight package input field
    handleWeight(event) {
        const value = event.target.value;
        const id = event.target.getAttribute("id");
    this.setState(state => ({
        ...state, wizardContext: {
            ...state.wizardContext, weight: {...state.wizardContext.weight, [id]: value}
        }
    }))
    }
    //shipping option field input
    shipping(event) {
        const value = event.target.value;
        const id = event.target.getAttribute("id");
        this.setState(state => ({
            ...state, wizardContext: {
                ...state.wizardContext, shippingOption: {...state.wizardContext.shippingOption, [id]: value}
            }
        }))
    }

    //handle complete label submission
    success(data) {
        this.props.onComplete(data);
    }

    //wizard steps
    wizardSteps() {
         switch (this.state.currentStep) {
            case 1:
                return <GetSendersAddress wizardContext={this.state.wizardContext.from} onAction={this.handleSender}/>;
            case 2:
                return <GetReceiversAddress wizardContext={this.state.wizardContext.to} onAction={this.handleReceiver}/>;
            case 3:
                return <GetWeight wizardContext={this.state.wizardContext.weight} onAction={this.handleWeight}/>;
            case 4:
                return <GetShippingOptions wizardContext={this.state.wizardContext.shippingOption} onAction={this.shipping}/>;
            case 5:
                return <Confirm wizardContext={this.state.wizardContext} onAction={this.success}/>;
             default:
        }
    }

    render() {
        const currentPage = this.wizardSteps();
        return (
            <div>
                <Header/>
                {currentPage}
                <NavButtons current={this.state.currentStep}
                            nextSteps={this.nextSteps}
                            previousSteps={this.previousSteps}/>
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
