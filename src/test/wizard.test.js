import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Wizard from "../core/components/wizard/wizard.js";
import Header from "../core/header.js";
import GetSenderAddress from "../features/shipping-label-maker/steps/step-one-senders-address.js";
import GetReceiversAddress from "../features/shipping-label-maker/steps/step-two-receiver-address.js";
import GetWeight from "../features/shipping-label-maker/steps/step-three-get-weight.js";
import GetShippingOptions from "../features/shipping-label-maker/steps/step-four-shipping-options.js";
import Confirm from "../features/shipping-label-maker/steps/step-five-confirm.js";

Enzyme.configure({ adapter: new Adapter() });

describe("Wizard component tests", () => {
    let wrapper;
    const props = {
        header: Header,
        steps: [
            <GetSenderAddress />,
            <GetReceiversAddress />,
            <GetWeight />,
            <GetShippingOptions />,
            <Confirm />,
        ],
        wizardContext: {},
        onComplete: (wizardContext) => wizardContext,
    };
    describe("Wizard should move backwards and forwards from sent by steps", () => {
        beforeEach(() => {
            wrapper = shallow(<Wizard {...props}/>);
        });
        it("currentStep should update respective to next and prev selected", () => {
            expect(wrapper.state("currentStep")).toEqual(1);
            wrapper.instance().nextSteps(2);
            expect(wrapper.state("currentStep")).toEqual(2);
            wrapper.instance().previousSteps(1);
            expect(wrapper.state("currentStep")).toEqual(1);
        });

        it("should render GetReceiverAddress component when currentStep is 2", () => {
            expect(wrapper.find(GetSenderAddress).length).toEqual(1);
            wrapper.instance().nextSteps(2);
            expect(wrapper.find(GetReceiversAddress).length).toEqual(1);
        });

        it("should render GetWeight component when proceeding to next step from step 2", () => {
            expect(wrapper.find(GetSenderAddress).length).toEqual(1);
            wrapper.instance().nextSteps(2);
            wrapper.instance().nextSteps(2);
            expect(wrapper.find(GetWeight).length).toEqual(1);
        });

        it("should be able to proceed from step 1 to step 5", () => {
            expect(wrapper.find(GetSenderAddress).length).toEqual(1);
            wrapper.instance().nextSteps(2);
            expect(wrapper.find(GetReceiversAddress).length).toEqual(1);
            wrapper.instance().nextSteps(2);
            expect(wrapper.find(GetWeight).length).toEqual(1);
            wrapper.instance().nextSteps(2);
            expect(wrapper.find(GetShippingOptions).length).toEqual(1);
            wrapper.instance().nextSteps(2);
            expect(wrapper.find(Confirm).length).toEqual(1);
        });

        it("should be able to proceed from step 5 to step 1", () => {
            expect(wrapper.find(GetSenderAddress).length).toEqual(1);
            wrapper.instance().nextSteps(2);
            wrapper.instance().nextSteps(2);
            wrapper.instance().nextSteps(2);
            wrapper.instance().nextSteps(2);
            expect(wrapper.find(Confirm).length).toEqual(1);
            wrapper.instance().previousSteps(1);
            expect(wrapper.find(GetShippingOptions).length).toEqual(1);
            wrapper.instance().previousSteps(1);
            expect(wrapper.find(GetWeight).length).toEqual(1);
            wrapper.instance().previousSteps(1);
            expect(wrapper.find(GetReceiversAddress).length).toEqual(1);
            wrapper.instance().previousSteps(1);
            expect(wrapper.find(GetSenderAddress).length).toEqual(1);
        });
    });
});
