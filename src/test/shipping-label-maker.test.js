import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShippingLabelMaker from "../features/shipping-label-maker/shipping-label-maker.js";
import ShippingLabel from "../features/shipping-label-maker/shipping-label.js";

Enzyme.configure({ adapter: new Adapter() });

describe("ShippingLabelMaker tests", () => {
    let wrapper;
    const props = {
        wizardContext: {
            from: {
                name: "name",
                street: "street",
                city: "city",
                state: "state",
                zip: "zip",
            },
            to: {
                name: "name",
                street: "street",
                city: "city",
                state: "state",
                zip: "zip",
            },
            weight: 11,
            shippingOption: "1",
        }
    };

    describe("ShippingLabelMaker should print a shipping label when createLabel is called", () => {
        it("should print a shipping label when createLabel is called", () => {
            wrapper = shallow(<ShippingLabelMaker {...props}/>);
            wrapper.instance().createLabel(props.wizardContext);
            expect(wrapper.find(ShippingLabel).length).toEqual(1);
        });
    });
});