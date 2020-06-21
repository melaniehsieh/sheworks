import React, { Component } from "react";
import * as d3 from "d3";
/*
class Stacked extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart(){
    */
document.addEventListener('DOMContentLoaded', function(e) {
    var margin = {top: 10, right: 50, bottom: 50, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

    // append the svg object to the body of the page
    var svg = d3.select("#my_dataviz")
      .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
      .append("g")
        .attr("transform",
              "translate(" + margin.left + "," + margin.top + ")");

    //Read the data
    const data = [{
      "days": "1",
      "id": "1",
      "Hours": 1
    },

    {
      "days": "2",
      "id": "1",
      "Hours": 2
    },
    {
      "days": "3",
      "id": "1",
      "Hours": 1.5
    },
    {
      "days": "4",
      "id": "1",
      "Hours": 1
    },

    {
      "days": "5",
      "id": "1",
      "Hours": 2
    },
    {
      "days": "6",
      "id": "1",
      "Hours": 1.5
    },
    {
      "days": "7",
      "id": "1",
      "Hours": 1.5
    },    
    {
      "days": "1",
      "id": "2",
      "Hours": 6
    },

    {
      "days": "2",
      "id": "2",
      "Hours": 5
    },
    {
      "days": "3",
      "id": "2",
      "Hours": 7
    },
    
    {
      "days": "4",
      "id": "2",
      "Hours": 3
    },

    {
      "days": "5",
      "id": "2",
      "Hours": 4
    },
    {
      "days": "6",
      "id": "2",
      "Hours": 2
    },
    {
      "days": "7",
      "id": "2",
      "Hours": 5
    },    
    {
      "days": "1",
      "id": "3",
      "Hours": 2
    },

    {
      "days": "2",
      "id": "3",
      "Hours": 1
    },
    {
      "days": "3",
      "id": "3",
      "Hours": .1
    },
    
    {
      "days": "4",
      "id": "3",
      "Hours": 4
    },

    {
      "days": "5",
      "id": "3",
      "Hours": .5
    },
    {
      "days": "6",
      "id": "3",
      "Hours": .75
    },
    {
      "days": "7",
      "id": "3",
      "Hours": .5
    },
  ]
/*
  d3.csv("stacked.csv", function(data) {
*/
      // group the data: I want to draw one line per group
      var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
        .key(function(d) { return d.id;})
        .entries(data);

      // Add X axis --> it is a date format
      var x = d3.scaleLinear()
      .domain([1,d3.max(data,function(d) {
        return d.days;
      })]).range([ 0, width ]);
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).ticks(3));

      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) { return +d.Hours; })])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));

      // color palette
      var res = sumstat.map(function(d){ return d.key }) // list of group names
      var color = d3.scaleOrdinal().domain(res).range(d3.schemeDark2);

      // Draw the line
      svg.selectAll(".line")
          .data(sumstat)
          .enter()
          .append("path")
            .attr("fill", "none")
            .attr("stroke", function(d){ return color(d.key) })
            .attr("stroke-width", 5)
            .attr("d", function(d){
              return d3.line()
                .x(function(d) { return x(d.days); })
                .y(function(d) { return y(+d.Hours); })
                (d.values)
            })

    });
/*
  });

  }
  render() {
    return <div id="my_dataviz"></div>;
  }
}

export default Stacked;
*/