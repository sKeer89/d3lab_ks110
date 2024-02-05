/**
 * Main entry point -- this file has been added to index.html in a <script> tag. Add whatever code you want below.
 */
"use strict";

const width = 500;
const height = 300;

const weatherData = [{
        city: "Urbana, USA",
        averageHighByMonth: [32.9, 37.7, 49.9, 62.8, 73.4, 82.5, 85.0, 83.7, 78.2, 65.2, 50.6, 36.7]
    },
    {
        city: "London, UK",
        averageHighByMonth: [46.6, 47.1, 52.3, 57.6, 64.2, 70.2, 74.3, 73.8, 68.0, 59.9, 52.0, 46.9]
    },
    {
        city: "Cape Town, SA",
        averageHighByMonth: [79.0, 79.7, 77.7, 73.4, 68.5, 64.6, 63.5, 64.0, 66.6, 70.3, 74.3, 76.8]
    }
];

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const functionThatConvertsMonthToXCoordinates = d3.scaleBand()
    .domain(MONTHS)
    .range([0, width])
    .padding(0.4); // TODO experiment and choose a number between 0 and 1

const functionThatConvertsMonthToYCoordinates = d3.scaleLinear()
    .domain([30, 90]) // Dynamic domain based on actual data
    .range([height, 0]);

//Padding was throwing error.

console.log("Lolol", functionThatConvertsMonthToXCoordinates("Feb")); // Left edge of "Feb"'s band
console.log("Hello", functionThatConvertsMonthToXCoordinates.bandwidth()); // The width of one band (every band has the same width)

// Confused what map() does? Visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
const allTemps = weatherData.map(city => city.averageHighByMonth).flat();

const margin = {
    top: 20,
    right: 20,
    bottom: 30,
    left: 40
};

// Create SVG element
const svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left}, ${margin.top})`);

svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(functionThatConvertsMonthToXCoordinates));

// Add y-axis
svg.append("g")
    .call(d3.axisLeft(functionThatConvertsMonthToYCoordinates));

svg.selectAll("rect")
    .data(weatherData[0].averageHighByMonth) // (Hardcoded) only Urbana’s data
    .join("rect")
    .attr("x", (dataPoint, i) => functionThatConvertsMonthToXCoordinates(MONTHS[i])) // i is dataPoint’s index in the data array
    .attr("y", (dataPoint) => functionThatConvertsMonthToYCoordinates(dataPoint))
    .attr("width", functionThatConvertsMonthToXCoordinates.bandwidth())
    .attr("height", (dataPoint) => height - functionThatConvertsMonthToYCoordinates(dataPoint))
    .attr("fill", "steelblue");

console.log("done");