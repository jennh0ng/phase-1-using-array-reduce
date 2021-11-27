const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// set up a variable called totalBatteries
// use a reduce() method to loop through batteryBatches to return the sum of all elements

// batteryAmount = element
const totalBatteries = batteryBatches.reduce(function(accumulator, batteryAmount) {
    return batteryAmount + accumulator}, 0);

// arrow function format
const totalBatteriesArrow = batteryBatches.reduce((accumulator, currentValue) => {
    return currentValue + accumulator}, 0);