"use strict";
const searchName = (value) => {
    if (value === null) {
        console.log('there is nothing to search');
    }
    else {
        console.log('searching');
    }
};
// searchName(null)
const getCarSpeedToMeterPerSecond = (speed) => {
    if (typeof speed === 'number') {
        const convertedSpeed = (speed * 1000) / 3600;
        console.log(convertedSpeed);
    }
    if (typeof speed === 'string') {
        const value = speed.split(' ')[0];
        const convertedSpeed = ((Number(value) * 1000) / 3600).toString();
        console.log(convertedSpeed);
    }
};
// getCarSpeedToMeterPerSecond(10);
// getCarSpeedToMeterPerSecond('10 kmh-1')
const throwError = (message) => {
    throw new Error(message);
};
// throwError('an error occurred')
