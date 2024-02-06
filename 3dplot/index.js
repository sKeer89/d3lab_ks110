"use strict";
const scene = d3.select('#data-container');

// Define linear scales
const xScale = d3.scaleLinear().domain([-0.5, 1]).range([-1, 1]);
const yScale = d3.scaleLinear().domain([-1, 1]).range([-1, 1]);
const zScale = d3.scaleLinear().domain([-1, 1]).range([-1, 1]);


// Draw spheres
const spheres = scene.selectAll('a-sphere')
    .data(irisData)
    .enter()
    .append('a-sphere')
    .attr('class', 'clickable') // Add the clickable class
    .attr('radius', 0.10)
    .attr('position', d => {
        if (d.type == 'Iris-pinkasa') {
            console.log(d.type, xScale(d.sepal_width), yScale(d.petal_length), zScale(d.petal_width));
        }
        return `${xScale(d.sepal_width)} ${yScale(d.petal_length)} ${zScale(d.petal_width)}`;
    })
    .attr('color', d => getColorForSpecies(d))
    .on('mouseenter', function(d) {
        console.log('Hovered over sphere:', d);
        // Access the attributes such as sepal length, petal length, petal width
        const sepalLength = d.sepal_length;
        const petalLength = d.petal_length;
        const petalWidth = d.petal_width;
        console.log('Attributes:', sepalLength, petalLength, petalWidth);
        // You can perform further actions with the attributes here
    })
    .on('mouseleave', function() {
        console.log('Left sphere');
        // You can perform actions when leaving the sphere
    });

const data = [
    { color: 'red', category: 'Iris-setosa' },
    { color: 'green', category: 'Iris-versicolor' },
    { color: 'blue', category: 'Iris-virginica' },
    { color: 'grey', category: 'Iris-pinkasa' }
];

const legend = d3.select("#legend");
const legendItems = legend.selectAll(".legend-item")
    .data(data)
    .enter()
    .append("div")
    .attr("class", "legend-item");

legendItems.append("div")
    .style("width", "20px")
    .style("height", "20px")
    .style("border-radius", "50%")
    .style("background-color", d => d.color)
    .style("display", "inline-block")
    .style("margin-right", "5px")
    .style("margin-left", "25px")
    .style("margin-top", "2px")
    .style("margin-bottom", "2px");

legendItems.append("div")
    .text(d => d.category)
    .style("display", "inline-block")
    .style("color", "black");



// Retrieve min and max values for scales
const minSepalWidth = d3.min(irisData, d => d.sepal_width);
const maxSepalWidth = d3.max(irisData, d => d.sepal_width);
const minPetalLength = d3.min(irisData, d => d.petal_length);
const maxPetalLength = d3.max(irisData, d => d.petal_length);
const minPetalWidth = d3.min(irisData, d => d.petal_width);
const maxPetalWidth = d3.max(irisData, d => d.petal_width);

function getColorForSpecies(d) {
    switch (d.type) {
        case 'Iris-setosa':
            return 'red';
        case 'Iris-versicolor':
            return 'green';
        case 'Iris-virginica':
            return 'blue';
        default:
            return 'gray'; // Default color for unknown species
    }
}