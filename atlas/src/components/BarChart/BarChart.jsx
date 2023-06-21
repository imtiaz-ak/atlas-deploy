import { useD3 } from '../../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  const ref = useD3(
    (svg) => {

      const projection = d3.geoEqualEarth();
      const path = d3.geoPath(projection)

      svg.select(".plot-area").append("path").attr("d", path)

      // const height = 500;
      // const width = 500;
      // const margin = { top: 20, right: 30, bottom: 30, left: 40 };

      // const x = d3
      //   .scaleBand()
      //   .domain(data.map((d) => d.year))
      //   .rangeRound([margin.left, width - margin.right])
      //   .padding(0.1);

      // const y1 = d3
      //   .scaleLinear()
      //   .domain([0, d3.max(data, (d) => d.sales)])
      //   .rangeRound([height - margin.bottom, margin.top]);

      // svg
      //   .select(".plot-area")
      //   .attr("fill", "steelblue")
      //   .selectAll(".bar")
      //   .data(data)
      //   .join("rect")
      //   .attr("class", "bar")
      //   .attr("x", (d) => x(d.year))
      //   .attr("width", x.bandwidth())
      //   .attr("y", (d) => y1(d.sales))
      //   .attr("height", (d) => y1(0) - y1(d.sales));
    },
    []
  );

  return (
    <svg
      ref={ref}
      style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}
    >
      <g className="plot-area" />
      <g className="x-axis" />
      <g className="y-axis" />
    </svg>
  );
}

export default BarChart;
