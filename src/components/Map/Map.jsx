import * as d3 from "d3";
import { useContext, useState } from "react";
import { useD3 } from "../../hooks/useD3";

import "./Map.css";

import * as districtGeoData from "../../data/bd_districts.geo.json";
import * as districtData from "../../data/bd_districts.json";
import * as upojelaGeoData from "../../data/bd_upojelas.geo.json";
import * as climateStories from "../../data/climate_stories.json";
import * as generatedDistricts from "../../data/generated_districts.json";
import DistrictContext from "../../context/DistrictContext";
import SidebarContext from "../../context/SidebarContext";
import DatasetContext from "../../context/DatasetContext";


const generateMinMax = (dataset) => {
    let minMax = {};
    dataset.forEach((element) => {
        Object.keys(element.futureData).forEach((key) => {
            if (minMax[key] === undefined) {
                minMax[key] = [
                    element.futureData[key],
                    element.futureData[key],
                ];
            } else {
                if (element.futureData[key] < minMax[key][0]) {
                    minMax[key][0] = element.futureData[key];
                }

                if (element.futureData[key] > minMax[key][1]) {
                    minMax[key][1] = element.futureData[key];
                }
            }
        });
    });
    return minMax;
};

const getClimateVariable = (district, variable) => {
    let districtData = generatedDistricts.districts.find((element) => {
        return element.name === district;
    });

    if (districtData === undefined) {
        return 0;
    }

    return districtData.futureData[variable];
};

export default function Map() {


    const { datasetName } = useContext(DatasetContext)

    const datasetNameMap = {
        'Average Daily Max': 'maxTemperature',
        'Average Daily Minimum': "minTemperature",
        'Hot Tropical Nights': 'hotTropical'
    }

    console.log(datasetName)
    console.log(datasetNameMap[datasetName])
    const [selectedVariable, setSelectedVariable] = useState(datasetNameMap[datasetName]);

    console.log(selectedVariable, '<--- selected variable')
    // reading context
    const { setDistrictId } = useContext(DistrictContext);
    const { setSidebarActive } = useContext(SidebarContext);

    const handleDistrictIdChange = (id) => setDistrictId(id);

    const districtWithStory = []
    Object.keys(climateStories).map((k) => {
        const s = climateStories[k]
        if (s.length > 0) {
            districtWithStory.push(k)
        }
    })

    const circlesData = []
    districtWithStory.forEach((d) => {
        const specificDistrict = districtData.districts.filter((e) => {
            if (e.name == d) {
                return e
            }
        })[0]
        const districtLat = specificDistrict.lat
        const districtLong = specificDistrict.long

        circlesData.push({ district: d, lat: districtLat, lon: districtLong, radius: 15 })
    })

    const ref = useD3((svg) => {
        const minMax = generateMinMax(generatedDistricts.districts);
        const variableDomain = {
            maxTemperature: minMax["maxTemperature"],
            minTemperature: minMax["minTemperature"],
            hotTropical: minMax["nDaysTminMoreThan26"],
        };

        const variableColourScheme = {
            maxTemperature: d3.interpolateYlOrRd,
            minTemperature: d3.interpolateBlues,
            hotTropical: d3.interpolateOrRd,
        };

        const variableDataMap = {
            maxTemperature: "maxTemperature",
            minTemperature: "minTemperature",
            hotTropical: "nDaysTminMoreThan26",
        };

        const variableLabelMap = {
            maxTemperature: "Annual Average Max Temperature (°C)",
            minTemperature: "Cooling Degree Days",
            hotTropical: "Number of Days Above 40°C",
        };

        /**
         * Use D3 to draw the colour legend, the variable coloured districts and
         * add tooltip on hover, and onClick functionality for the districts
         */

        const projection = d3
            .geoMercator()
            .fitSize([2160, 2160], districtGeoData);

        const colorScale = d3
            .scaleSequential()
            .domain(variableDomain[datasetNameMap[datasetName]])
            .interpolator(variableColourScheme[datasetNameMap[datasetName]]);

        const path = d3.geoPath().projection(projection);

        d3.select("#legend-svg").selectAll("*").remove();

        let legend = d3
            .select("#legend-svg")
            .append("g")
            .attr("id", "legend")
            .attr("transform", `translate(${20}, 50)`)
            .attr("width", 800)
            .attr("height", 100);

        // Create a scale for the legend
        let legendScale = d3
            .scaleLinear()
            .domain(variableDomain[datasetNameMap[datasetName]])
            .range([0, 200]);

        // Create a colour horizontal gradient for the legend
        let legendGradient = legend
            .append("defs")
            .append("linearGradient")
            .attr("id", "legend-gradient")
            .attr("x1", "0%")
            .attr("y1", "0%")
            .attr("x2", "100%")
            .attr("y2", "0%");

        // Create the colour stops for the gradient
        legendGradient
            .append("stop")
            .attr("offset", "0%")
            .attr(
                "stop-color",
                colorScale(variableDomain[datasetNameMap[datasetName]][0])
            );
        legendGradient
            .append("stop")
            .attr("offset", "50%")
            .attr(
                "stop-color",
                colorScale(
                    (variableDomain[datasetNameMap[datasetName]][0] +
                        variableDomain[datasetNameMap[datasetName]][1]) /
                    2
                )
            );
        legendGradient
            .append("stop")
            .attr("offset", "100%")
            .attr(
                "stop-color",
                colorScale(variableDomain[datasetNameMap[datasetName]][1])
            );

        // Draw the gradient rect
        legend
            .append("rect")
            .attr("width", 200)
            .attr("height", 20)
            .style("fill", "url(#legend-gradient)");

        // Create a scale for the legend
        let legendAxis = d3.axisBottom(legendScale).ticks(5);

        // Draw the legend axis
        legend
            .append("g")
            .attr("class", "legend-axis")
            .attr("transform", "translate(0, 20)")
            .attr("width", 200)
            .attr("height", 20)
            .call(legendAxis);

        // Add a variable title
        legend
            .append("text")
            .attr("x", 0)
            .attr("dy", "-0.5em")
            .attr("text-align", "center")
            .text(variableLabelMap[datasetNameMap[datasetName]]);

        // svg.attr("width", 1280).attr("height", 1280);
        svg.selectAll("path")
            .data(districtGeoData.features)
            .join("path")
            .attr("d", path)
            .attr("stroke", "#000")
            .attr("stroke-width", 0.5)
            .attr("fill", (d) => {
                let value = getClimateVariable(
                    d.properties["NAME_3"],
                    variableDataMap[datasetNameMap[datasetName]]
                );
                return colorScale(value);
            })
            .on("mouseover", (event, d) => {
                const stories = climateStories[d.properties["NAME_3"]]
                d3
                    .select("#tooltip")
                    .style("display", "flex")
                    .style("left", event.pageX + 0 + "px")
                    .style("top", event.pageY + 0 + "px").html(`
                    <div class="tooltip-row">
                        <span class="tooltip-title">${d.properties["NAME_3"]
                        }</span>
                        <span class="tooltip-temp">${getClimateVariable(
                            d.properties["NAME_3"],
                            variableDataMap[datasetNameMap[datasetName]]
                        )} °C</span>
                    </div>
                    <div class="tooltip-row">
                        <span class="tooltip-story-count">${stories.length} Stories</span>
                        <span class="tooltip-period">&#x2022;</span> 
                        <span class="tooltip-entity-count">${0} Entities</span>
                    </div>
            `);
            })
            .on("mouseout", (event, d) => {
                d3.select("#tooltip").style("display", "none");
            })
            .on("click", (event, d) => {
                // Render out the district name to the district-info div
                generatedDistricts.districts.forEach((generatedD) => {
                    if (generatedD.name == d.properties.NAME_3) {
                        handleDistrictIdChange(generatedD.id);
                    }
                });
                setSidebarActive(true);
            });

        svg.selectAll("circle")
            .data(circlesData)
            .enter()
            .append("circle")
            .attr("cx", (d) => projection([d.lon, d.lat])[0])
            .attr("cy", (d) => projection([d.lon, d.lat])[1])
            .attr("r", (d) => d.radius)
            .attr("stroke", "black") // Border color
            .attr("fill", "white")
            .attr("stroke-width", 2) // Border width
            .attr("opacity", 0.7) // Customize the circle's opacity
            // .append("polygon")
            // .attr("points", (d) => {
            //     return `${d.lon},${d.lat} ${d.lon},${d.lat + 0.01} ${d.lon + 0.01},${d.lat}`
            // })
            // .attr("fill", "yellow")
            // .append("polygon")
            // .attr("points", (d) => {
            //     const x = d.lon; // x-coordinate of the center
            //     const y = d.lat; // y-coordinate of the center
            //     const triangleSize = 2; // Adjust the size of the triangle
            //     return `${x - triangleSize},${y - triangleSize} ${x + triangleSize},${y} ${x - triangleSize},${y + triangleSize}`;
            // })
            // .attr("fill", "red") // Triangle color
            .on("mouseover", (event, d) => {
                const stories = climateStories[d.district]
                d3
                    .select("#tooltip")
                    .style("display", "flex")
                    .style("left", event.pageX + 0 + "px")
                    .style("top", event.pageY + 0 + "px").html(`
                    <div class="tooltip-row">
                        <span class="tooltip-title">${d.district
                        }</span>
                        <span class="tooltip-temp">${getClimateVariable(
                            d.district,
                            variableDataMap[selectedVariable]
                        )} °C</span>
                    </div>
                    <div class="tooltip-row">
                        <span class="tooltip-story-count">${stories.length} Stories</span>
                        <span class="tooltip-period">&#x2022;</span> 
                        <span class="tooltip-entity-count">${0} Entities</span>
                    </div>
            `);
            })
            .on("mouseout", (event, d) => {
                d3.select("#tooltip").style("display", "none");
            })
            .on("click", (event, d) => {
                // Render out the district name to the district-info div
                generatedDistricts.districts.forEach((generatedD) => {
                    if (generatedD.name == d.district) {
                        handleDistrictIdChange(generatedD.id);
                    }
                });
                setSidebarActive(true);
            });


        d3.select("#map-vis").call(
            d3.zoom().on("zoom", (e) => {
                // NOTE: We select the parent #map-vis element as a reference point for the mouse
                // The transform is applied to the child #map-vis-group element
                svg.attr("transform", e.transform);
            })
        );
        console.log('ran again!')
    }, [datasetName]);

    return (
        <>
            <div className="map-container">
                <div id="tooltip"></div>
                <div id="legend">
                    <svg id="legend-svg" width="400" height="100" style={{ "float": "right" }}></svg>
                </div>
                <svg
                    id="map-vis"
                    className="map"
                    style={{
                        width: "100%",
                    }}>
                    <g id="map-vis-group" ref={ref}></g>
                </svg>
                <div id="district-info" className="district-content"></div>
            </div >
        </>
    );
}