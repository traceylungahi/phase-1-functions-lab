function distanceFromHqInBlocks(someValue) {
    if (someValue > 42) {
        return someValue-42
    }
    else {
        42-someValue
        return 42-someValue
    }
}
function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
}
const distanceTravelledInFeet = (start, destination) => destination > start?
(destination - start) * 264 : (start - destination) * 264;
const calculatesFarePrice = (start, destination) => {
    let charges; 
    if (distanceTravelledInFeet(start, destination) < 400) {
        charges = 0;
    }
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000) {
        charges = (distanceTravelledInFeet(start, destination) - 400) * 0.02;
    }
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500) {
        charges = 25;
    }
    else {
        charges = 'cannot travel that far';
    }
    return charges;
}