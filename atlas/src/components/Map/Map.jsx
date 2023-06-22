import * as d3 from 'd3';
import { useState } from 'react'
import {useD3} from '../../hooks/useD3'

import './Map.css'

import * as  districtGeoData from '../../data/bd_districts.geo.json'
import * as districtData from '../../data/bd_districts.json'
import * as upojelaGeoData from '../../data/bd_upojelas.geo.json'
import * as climateStories from '../../data/climate_stories.json'
import * as generatedDistricts from '../../data/generated_districts.json'



const generateMinMax = (dataset) => {
  let minMax = {};
  console.log("THIS IS DATASET", dataset)
  dataset.forEach((element) => {
      Object.keys(element.futureData).forEach((key) => {
          if (minMax[key] === undefined) {
              minMax[key] = [element.futureData[key], element.futureData[key]];
          } else {
              if (element.futureData[key] < minMax[key][0]) {
                  minMax[key][0] = element.futureData[key];
              }

              if (element.futureData[key] > minMax[key][1]) {
                  minMax[key][1] = element.futureData[key];
              }
          }
      });
  }
  );
  console.log(minMax);
  return minMax;
}

const getClimateVariable = (district, variable) => {
  let districtData = generatedDistricts.districts.find((element) => {
      return element.name === district;
  }
  );

  if (districtData === undefined) {
      return 0;
  }

  return districtData.futureData[variable];
}

export default function Map() {
  const [selectedVariable, setSelectedVariable] = useState("temperature")

  const ref = useD3(
    (svg) => {
      const minMax = generateMinMax(generatedDistricts.districts)
      const variableDomain = {
          temperature: minMax['meanTemperature'],
          ncdd: minMax['nCdd'],
          nhotdays: minMax['nHotDays40'],
      }

      const variableColourScheme = {
          temperature: d3.interpolateYlOrRd,
          ncdd: d3.interpolateBlues,
          nhotdays: d3.interpolateOrRd,
      }
  
      const variableDataMap = {
        temperature: "meanTemperature",
        ncdd: "nCdd",
        nhotdays: "nHotDays40",
      }

      const variableLabelMap = {
        temperature: "Mean Temperature (°C)",
        ncdd: "Cooling Degree Days",
        nhotdays: "Number of Days Above 40°C",
      }
  
      const projection = d3.geoMercator().fitSize([500, 500], districtGeoData);
      console.log(variableDomain)
      console.log(selectedVariable)
      console.log(variableDomain[selectedVariable])
      const colorScale = d3.scaleSequential().domain(variableDomain[selectedVariable]).interpolator(d3.interpolateYlOrRd);
      // const legend = d3.select("#map-vis").append("g")
      // .attr("id", "legend")
      // .attr("transform", `translate(${vis.config.containerWidth - 300}, 50)`)
      // .attr("width", 200)
      // .attr("height", 50);
      const path = d3.geoPath().projection(projection);
  
      svg.attr("width", 500).attr("height", 500);
      svg.selectAll("path")
        .data(districtGeoData.features)
        .join("path")
        .attr("d", path)
        .attr("stroke", "#000")
        .attr("stroke-width", 0.5)
        .attr("fill", (d) => {
          let value = getClimateVariable(d.properties["NAME_3"], variableDataMap[selectedVariable]);
          return  colorScale(value);
      })
      .on("mouseover", (event, d) => {
        d3.select("#tooltip")
            .style("display", "block")
            .style("left", event.pageX + 20 + "px")
            .style("top", event.pageY + 20 + "px").html(`
                <div id='tooltip-title'>${d.properties["NAME_3"] + "-" + d.properties["NAME_1"]} </div>
                <div id='tooltip-content'>
                    <div class='tooltip-content-row'>
                        <div class='tooltip-content-row-label'>${variableLabelMap[selectedVariable]}</div>
                        <div class='tooltip-content-row-value'>${getClimateVariable(d.properties["NAME_3"], variableDataMap[selectedVariable])}</div>
                    </div>
                </div>
            `);
    })
    .on("mouseout", (event, d) => {
      d3.select("#tooltip").style("display", "none");
  })
    },
    []
  );

  return (
    <>
      <div class="container">
        <div id="tooltip"></div>
        <svg id="map-vis" class="map" ref={ref}
        style={{
        height: 500,
        width: "100%",
        marginRight: "0px",
        marginLeft: "0px",
      }}></svg>
        <div id="district-info" class="district-content"></div>
    </div>
    </>
    
  )
}
