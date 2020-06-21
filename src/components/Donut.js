import React, { Component } from "react";
import * as d3 from "d3";

class Donut extends Component {
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
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

    // const data = [
    //   { id: "412563", time: 26.3 },
    //   { id: "258963", time: 0.81 },
    //   { id: "782369", time: 54.0 },
    //   { id: "741236", time: 33.5 },
    //   { id: "369852", time: 30.8 },
    //   { id: "145236", time: 40.8 },
    // ];

    const data = {
      412563: 26.3,
      258963: 0.81,
      782369: 54.0,
      741236: 33.5,
      369852: 30.8,
      145236: 40.8,
    };

    var color = d3.scaleOrdinal().domain(data).range(d3.schemeDark2);

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => {
        return d.value;
      });
    let data_ready = pie(d3.entries(data));

    const arc = d3
      .arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    svg
      .selectAll("allSlices")
      .data(data_ready)
      .enter()
      .append("path")
      .attr("d", arc)
      .attr("fill", function (d) {
        return color(d.data.key);
      })
      .attr("stroke", "white")
      .style("stroke-width", "2px")
      .style("opacity", 0.7);

    svg
      .selectAll("allPolylines")
      .data(data_ready)
      .enter()
      .append("polyline")
      .attr("stroke", "black")
      .style("fill", "none")
      .attr("stroke-width", 1)
      .attr("points", function (d) {
        var posA = arc.centroid(d); // line insertion in the slice
        var posB = outerArc.centroid(d); // line break: we use the other arc generator that has been built only for that
        var posC = outerArc.centroid(d); // Label position = almost the same as posB
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2; // we need the angle to see if the X position will be at the extreme right or extreme left
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1); // multiply by 1 or -1 to put it on the right or on the left
        return [posA, posB, posC];
      });

    svg
      .selectAll("allLabels")
      .data(data_ready)
      .enter()
      .append("text")
      .text((d) => {
        return d.data.key + d.data.value;
      })
      .attr("transform", function (d) {
        var pos = outerArc.centroid(d);
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return "translate(" + pos + ")";
      })
      .style("text-anchor", function (d) {
        var midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return midangle < Math.PI ? "start" : "end";
      });
  }

  render() {
    return <div id="donut_time"></div>;
  }
}

export default Donut;
