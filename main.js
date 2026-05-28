import OpenCurve from "./OpenCurve/PeakCurve.mts";

let openCurve = OpenCurve(0,10);

const numbers = [];

for (let i = 0; i < 1000; i++){
    numbers.push(openCurve.random(7))
}



const frequency = {};

// Count frequency
for (const num of numbers) {
  frequency[num] = (frequency[num] || 0) + 1;
}

// Log results
for (const key in frequency) {
  console.log(`${key} appears ${frequency[key]} times`);
}