// define conversion of feet in to meters
const feet_To_Meters = 0.3048;

// Plot dimensions in feet
const plotLengthFeet = 60;
const plotWidthFeet = 40;

// convert plot dimensions in meters
const plotLengthMeters = plotLengthFeet * feet_To_Meters;
const plotWidthMeters = plotWidthFeet * feet_To_Meters;

// Print the converted dimension
console.log('The converted rectangular plot is:- ', plotLengthMeters.toFixed(2) ,'meters' , '*', plotWidthMeters.toFixed(2) , 'meters')

// Area of converted rectangular plot
const area = plotLengthMeters * plotWidthMeters;
console.log('Area:- ', area,'square meters');

// Area of 25 plots 
const totalArea = 25 * area;
console.log('Total Area:- ' , totalArea , 'square meters');

// 1 acre = 4046.86 square meters
// Total Area in acres
const totalAreaInAcre = totalArea / 4046.86;
console.log('Total Area In Acres:- ' , totalAreaInAcre , 'acres');

