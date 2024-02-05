"use strict";
const values = [{
    x: 72,
    y: 200
}, {
    x: 68,
    y: 165
}, {
    x: 69,
    y: 160
}, {
    x: 68,
    y: 135
}, {
    x: 64,
    y: 120
}, {
    x: 72,
    y: 162
}, {
    x: 72,
    y: 190
}, {
    x: 66,
    y: 139
}, {
    x: 68,
    y: 155
}, {
    x: 70,
    y: 155
}, {
    x: 74,
    y: 185
}, {
    x: 74,
    y: 170
}, {
    x: 63,
    y: 137
}, {
    x: 66.25,
    y: 125
}, {
    x: 62,
    y: 114
}, {
    x: 67.5,
    y: 130
}, {
    x: 70,
    y: 196
}, {
    x: 68.5,
    y: 160
}, {
    x: 66,
    y: 135
}, {
    x: 73,
    y: 155
}, {
    x: 64,
    y: 125
}, {
    x: 63,
    y: 125
}, {
    x: 66,
    y: 200
}, {
    x: 71,
    y: 160
}, {
    x: 68,
    y: 120
}, {
    x: 69,
    y: 160
}, {
    x: 65,
    y: 120
}, {
    x: 64,
    y: 118
}, ];

// Set up the dimensions of the chart
const width = 500;
const height = 300;
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

// Create scales for x and y axes
const xScale = d3.scaleLinear()
    .domain([62, 74])
    .range([0, width]);

const yScale = d3.scaleLinear()
    .domain([110, 200])
    .range([height, 0]);

// Add x-axis
svg.append("g")
    .attr("transform", `translate(0, ${height})`)
    .call(d3.axisBottom(xScale));

// Add y-axis
svg.append("g")
    .call(d3.axisLeft(yScale));

// Add dots to represent data points
svg.selectAll(".dot")
    .data(values)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => xScale(d.x))
    .attr("cy", d => yScale(d.y))
    .attr("r", 5); // radius of the dots