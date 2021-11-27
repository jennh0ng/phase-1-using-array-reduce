const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// set up a variable called totalBatteries
// use a reduce() method to loop through batteryBatches to return the sum of all elements
// reduce() method uses a callback function with two parameters - accumulator, batteryAmount

// a = 0 (second argument for reduce()), batteryAmount = 4 => a = 4
// a = 4 (second argument for reduce()), batteryAmount = 5 => a = 9
// a = 9 (second argument for reduce()), batteryAmount = 3 => a = 12
// a = 12 (second argument for reduce()), batteryAmount = 4 => a = 16
// a = 16 (second argument for reduce()), batteryAmount = 4 => a = 20
// a = 20 (second argument for reduce()), batteryAmount = 6 => a = 26
// a = 26 (second argument for reduce()), batteryAmount = 5 => a = 31 <- ding ding ding!

const totalBatteries = batteryBatches.reduce(function(accumulator, batteryAmount) {
    return batteryAmount + accumulator}, 0);

// arrow function format
const totalBatteriesArrow = batteryBatches.reduce((accumulator, currentValue) => {
    return currentValue + accumulator}, 0);