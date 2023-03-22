const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
        const newArr = drivers.slice(0, 2)
        return newArr;
}

const returnLastTwoDrivers = function (drivers) {
        const newArr = drivers.slice(-2)
        return newArr;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (int) {
        return function(fare) {
                return fare * int;
        }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func) {
        return func(drivers);
}