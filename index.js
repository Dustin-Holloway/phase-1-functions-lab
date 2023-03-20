// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const blocks = 42
    if (someValue > blocks) {
        return someValue - blocks
    } else {
        return blocks - someValue
    }
};


function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264;      
}

function distanceTravelledInFeet(start, destination) {
    if (start > destination) {
    return (start - destination) * 264
    } else {
        return (destination - start) * 264
    }
}

function calculatesFarePrice(start, destination) {
    let travel = (distanceTravelledInFeet(start, destination))

    if (travel <= 400){
        return 0
    }

    if (travel > 400 && travel < 2000) {
        return (travel - 400) * .02
    }

    if (travel > 2000 && travel < 2500) {
        return 25
    }
    
    else {
        return "cannot travel that far"
    }
}