export function getShippingOption(shippingOption) {
    if (shippingOption === "1") return "Ground";
    else if (shippingOption === "2") return "Priority";
    else return "You did not select shipping";
}

export function getShippingCost(weight, shippingOption) {
    const shippingRate = 0.40;
    return (Number(weight) * shippingRate * (shippingOption === "1" ? 1 : 1.5)).toFixed(2);
}