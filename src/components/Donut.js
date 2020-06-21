import React, { Component } from "react";
import * as d3 from "d3";

class Donut extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = this.props.data;
    const width = this.props.width;
    const height = this.props.height;
    const margin = this.props.margin;

    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3
      .select("#donut_time")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    var color = d3.scaleOrdinal().domain(data).range(d3.schemeDark2);

    const pie = d3.pie().value((d) => {
      return d.value;
    });

    let data_ready = pie(d3.entries(data));

    const arcGenerator = d3.arc().innerRadius(0).outerRadius(radius);

    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arcGenerator)
      .attr("fill", (d) => {
        return color(d.data.key);
      })
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    svg
      .selectAll("mySlices")
      .data(data_ready)
      .enter()
      .append("text")
      .text((d) => {
        return d.data.key + d.data.timeStamp;
      })
      .attr("transform", function (d) {
        return "translate(" + arcGenerator.centroid(d) + ")";
      })
      .style("text-anchor", "middle")
      .style("font-size", 17);
  }

  render() {
    return <div id="donut_time"></div>;
  }
}

export default Donut;
