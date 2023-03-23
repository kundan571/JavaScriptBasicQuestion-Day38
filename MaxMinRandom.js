// Generate 5 random 3 digit number and stores in array
const values = [];
for(let i = 0; i < 5; i++){
    // generate 3 digit values
    const value = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    values.push(value);
}

// find the minimum and maximum
let minimum = values[0];
let maximum = values[0];
for(let i = 0; i < values.length; i++){
    if(values[i] < minimum){
        minimum = values[i];
    }
    if(values[i] > maximum){
        maximum = values[i];
    }
}
// print the maximum and minimum
console.log('Random 3 digit Values are:- ' , values);
console.log('minimum is:- ' , minimum);
console.log('Maximum is:- ' , maximum);