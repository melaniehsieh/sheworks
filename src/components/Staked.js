import React, { Component } from "react";
import * as d3 from "d3";

class Stacked extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;
    const marginT = this.props.marginT;
    const marginR = this.props.marginR;
    const marginB = this.props.marginB;
    const marginL = this.props.marginL;
    const width = this.props.width1 - marginL - marginR;
    const height = this.props.height1 - marginT - marginB;

    const svg = d3
      .select("#donut_time")
      .append("svg")
      .attr("width", width + marginL + marginR)
      .attr("height", height + marginT + marginB)
      .append("g")
      .attr("transform", "translate(" + marginL + "," + marginT + ")");

    d3.csv(
      "https://raw.githubusercontent.com/holtzy/data_to_viz/master/Example_dataset/5_OneCatSevNumOrdered.csv",
      function (data) {
        // group the data: I want to draw one line per group
        var sumstat = d3
          .nest() // nest function allows to group the calculation per level of a factor
          .key(function (d) {
            return d.name;
          })
          .entries(data);

        // Add X axis --> it is a date format
        var x = d3
          .scaleLinear()
          .domain(
            d3.extent(data, function (d) {
              return d.year;
            })
          )
          .range([0, width]);
        svg
          .append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x).ticks(5));

        // Add Y axis
        var y = d3
          .scaleLinear()
          .domain([
            0,
            d3.max(data, function (d) {
              return +d.n;
            }),
          ])
          .range([height, 0]);
        svg.append("g").call(d3.axisLeft(y));

        // color palette
        var res = sumstat.map(function (d) {
          return d.key;
        }); // list of group names
        var color = d3
          .scaleOrdinal()
          .domain(res)
          .range([
            "#e41a1c",
            "#377eb8",
            "#4daf4a",
            "#984ea3",
            "#ff7f00",
            "#ffff33",
            "#a65628",
            "#f781bf",
            "#999999",
          ]);

        // Draw the line
        svg
          .selectAll(".line")
          .data(sumstat)
          .enter()
          .append("path")
          .attr("fill", "none")
          .attr("stroke", function (d) {
            return color(d.key);
          })
          .attr("stroke-width", 1.5)
          .attr("d", function (d) {
            return d3
              .line()
              .x(function (d) {
                return x(d.year);
              })
              .y(function (d) {
                return y(+d.n);
              })(d.values);
          });
      }
    );
  }

  render() {
    return <div id="donut_time"></div>;
  }
}

export default Stacked;
