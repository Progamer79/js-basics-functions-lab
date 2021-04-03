// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    let blocks;
    if (pickupLocation <= 42) {
        blocks = 42 - pickupLocation;
    }
    else {
        blocks = pickupLocation - 42;
    }

    return blocks;
}




function distanceFromHqInFeet(pickupLocation) {
    let blocks = distanceFromHqInBlocks(pickupLocation);
    let feet = blocks * 264;
    return feet;
}




function distanceTravelledInFeet(startBlock, endBlock) {
    let feet;
    if (startBlock >= endBlock) {
        feet = (startBlock * 264) - (endBlock * 264);
    }
    else {
        feet = (endBlock * 264) - (startBlock * 264);
    }

    return feet;
}




function calculatesFarePrice(startBlock, endBlock) {
    let feet = distanceTravelledInFeet(startBlock, endBlock);
    let fare;

    if (feet <= 400) {
        fare = 0;
    }
    else if ((feet > 400) && (feet < 2000)) {
        fare = (feet - 400) * 0.02;
    }
    else if ((feet >= 2000) && (feet < 2500)) {
        fare = 25;
    }
    else {
        let message = "cannot travel that far";
        return message;
    }

    return fare;
}