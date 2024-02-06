"use strict";

const values = window.irisData;
const width = 500;
const height = 300;

// Create A-Frame scene
const scene = d3.select("a-scene");

// Set up the scales (similar to your existing code)
/*const xScale = d3.scaleLinear()
    .domain([0, d3.max(values, d => d.sepal_width)])
    .range([0, width / 100]); // Convert to meters

const yScale = d3.scaleLinear()
    .domain([0, d3.max(values, d => d.petal_length)])
    .range([0, height / 100]); // Convert to meters

const zScale = d3.scaleLinear()
    .domain([0, d3.max(values, d => d.petal_width)])
    .range([0, height / 100]); // Convert to meters*/

// Create A-Frame cylinder elements for axes
const xAxis = scene.append('a-cylinder')
    .attr('position', `0 0 0`)
    .attr('radius', 0.005)
    .attr('height', width / 100)
    .attr('rotation', '0 0 0');

const yAxis = scene.append('a-cylinder')
    .attr('position', `0 0 0`)
    .attr('radius', 0.005)
    .attr('height', height / 100)
    .attr('rotation', '0 0 90');

const zAxis = scene.append('a-cylinder')
    .attr('position', `0 0 0`)
    .attr('radius', 0.005)
    .attr('height', height / 100)
    .attr('rotation', '90 0 0');

// Create A-Frame sphere elements for data points
/*scene.selectAll('.dot')
    .data(values)
    .enter().append('a-sphere')
    .attr('class', 'dot')
    .attr('position', d => `${xScale(d.sepal_width)} ${yScale(d.petal_length)} ${zScale(d.petal_width)}`)
    .attr('radius', 0.01); // Adjust the radius as needed*/