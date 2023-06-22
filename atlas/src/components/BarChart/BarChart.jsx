// import { useD3 } from '../../hooks/useD3';
// import React from 'react';
// import * as d3 from 'd3';

// import { useData } from '../../hooks/useData';

// import * as generatedDistricts from "../../data/generated_districts.json"
// import { features } from "../../data/bd_districts.geo.json"

// console.log(generatedDistricts, 'imported districts')
// console.log(features, 'imported features')

// const generateMinMax = (dataset) => {
//   let minMax = {};
//   console.log("THIS IS DATASET", dataset)
//   dataset.forEach((element) => {
//       Object.keys(element.futureData).forEach((key) => {
//           if (minMax[key] === undefined) {
//               minMax[key] = [element.futureData[key], element.futureData[key]];
//           } else {
//               if (element.futureData[key] < minMax[key][0]) {
//                   minMax[key][0] = element.futureData[key];
//               }

//               if (element.futureData[key] > minMax[key][1]) {
//                   minMax[key][1] = element.futureData[key];
//               }
//           }
//       });
//   }
//   );
//   console.log(minMax);
//   return minMax;
// }

// const getClimateVariable = (district, variable) => {
//   let vis = this;

//   let districtData = vis.climateData.find((element) => {
//       return element.name === district;
//   }
//   );

//   if (districtData === undefined) {
//       return 0;
//   }

//   return districtData.futureData[variable];
// }

// function BarChart({ data }) {
//   const importedData = useData()
//   console.log(importedData)
//   const ref = useD3(
//     (svg) => {

//       // const projection = d3.geoEqualEarth();
//       // const path = d3.geoPath(projection)

//       //TEMP
//       const selectedVariable = "temperature"

//       if (importedData && importedData?.data?.features){
//         const jsonData = importedData.data
//         const districtData = importedData.districtData

//         const minMax = generateMinMax(districts)

//         const variableDomain = {
//             temperature: minMax['meanTemperature'],
//             ncdd: minMax['nCdd'],
//             nhotdays: minMax['nHotDays40'],
//         }
  
//         const variableDataMap = {
//           temperature: "meanTemperature",
//           ncdd: "nCdd",
//           nhotdays: "nHotDays40",
//       }
  
//         const projection = d3.geoMercator().fitSize([500, 500], jsonData);
  
//         const colorScale = d3.scaleSequential().domain(variableDomain[selectedVariable]).interpolator(d3.interpolateYlOrRd);
  
//         const path = d3.geoPath().projection(projection);
  
//         svg.attr("width", 500).attr("height", 500);
  
//         svg.selectAll("path")
//           .data(jsonData.features)
//           .join("path")
//           .attr("d", path)
//           .attr("stroke", "#000")
//           .attr("stroke-width", 0.5)
//           .attr("fill", (d) => {
//             let value = getClimateVariable(d.properties["NAME_3"], variableDataMap[selectedVariable]);
//             return  colorScale(value);
//       })

      
//       }
//     },
//     [importedData]
//   );

//   return (
//     importedData?.data?.features ? 
//     <svg
//       ref={ref}
//       style={{
//         height: 500,
//         width: "100%",
//         marginRight: "0px",
//         marginLeft: "0px",
//       }}
//     >
//     </svg>:<></>
//   );
// }

// export default BarChart;
