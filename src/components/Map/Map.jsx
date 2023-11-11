import * as d3 from "d3";
import { useContext, useState } from "react";
import { useD3 } from "../../hooks/useD3";

import "./Map.css";

import * as districtGeoData from "../../data/bd_districts.geo.json";
import * as districtData from "../../data/bd_districts.json";
import * as upojelaGeoData from "../../data/bd_upojelas.geo.json";
import * as climateStories from "../../data/climate_stories.json";
import * as generatedDistricts from "../../data/generated_districts.json";
import * as worldBankData from '../../data/world_bank_data.json'
import * as districtToDivision from '../../data/districts_to_division.json'
import * as minMaxData from '../../data/wb_clim_var_minmax.json'
import DistrictContext from "../../context/DistrictContext";
import SidebarContext from "../../context/SidebarContext";
import DatasetContext from "../../context/DatasetContext";


// Old data helper function (to be removed)
// const generateMinMax = (dataset) => {
//     let minMax = {};
//     dataset.forEach((climateVar) => {
//         Object.keys(climateVar["climatology"]).forEach((key) => {

//         });
//     });
//     return minMax;
// };


const getClimateVariable = (district, variable, dataType, timeRange, climateChange) => {
    /**
     * Valid values for each:
     * variable: cdd65, hd35, hd40, hd45, prpercnt, r50mm, rx1day, rx5day, sd, tasmax, tasmin, tr26, tr29, txx
     * dataType: climatology, anomaly
     * timeRange: 1995-2014, 2020-2039, 2040-2059, 2060-2079, 2080-2099
     * climateChange: historical, ssp245, ssp370
     */
    // TODO make dynamic based on UI selectors and then remove the variable below
    // Currently climate emissions toggle doesn't work because it relies on timeRange to be a future value, so that has to be implemented first
    dataType = "climatology"
    if (timeRange == "1995-2014") {
        return worldBankData[variable][dataType][timeRange]["historical"][districtToDivision[district]]
    } else {
        return worldBankData[variable][dataType][timeRange][climateChange][districtToDivision[district]]
    }    
};

export default function Map() {


    const { datasetConfig } = useContext(DatasetContext)
    const datasetName = datasetConfig['name']
    const datasetEmission = datasetConfig['emission']
    const datasetTimeline = datasetConfig['timeline']
    // TODO make dynamic based on UI selectors
    const datasetType = "climatology";

    const datasetNameMap = {
        'Cooling Degree Days': 'cdd65',
        'Hot Days Over 35°C': "hd35",
        'Hot Days Over 40°C': 'hd40',
        'Hot Days Over 45°C': 'hd45',
        'Precipitation Percent Change': 'prpercnt',
        'Above 50mm': 'r50mm',
        'Largest 1-Day Precipitation': 'rx1day',
        'Largest 5-Day Precipitation': 'rx5day',
        'Summer Days': 'sd',
        'Surface Air Maximum': 'tasmax',
        'Surface Air Minimum': 'tasmin',
        'Maximum Over 26°C': 'tr26',
        'Maximum Over 29°C': 'tr29',
        'Single Day Maximum': 'txx'
    }

    const [selectedVariable, setSelectedVariable] = useState(datasetNameMap[datasetName]);

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
        // const minMax = generateMinMax(generatedDistricts.districts);

        const variableDomain = {
            "cdd65": minMaxData["cdd65"][datasetType],
            'hd35': minMaxData["hd35"][datasetType],
            'hd40': minMaxData["hd40"][datasetType],
            'hd45': minMaxData["hd45"][datasetType],
            'prpercnt': minMaxData["prpercnt"][datasetType],
            'r50mm': minMaxData["r50mm"][datasetType],
            'rx1day': minMaxData["rx1day"][datasetType],
            'rx5day': minMaxData["rx5day"][datasetType],
            'sd': minMaxData["sd"][datasetType],
            'tasmax': minMaxData["tasmax"][datasetType],
            'tasmin': minMaxData["tasmin"][datasetType],
            'tr26': minMaxData["tr26"][datasetType],
            'tr29': minMaxData["tr29"][datasetType],
            'txx': minMaxData["txx"][datasetType],
        
            // Legacy Hybdrid Data (to be removed)
            maxTemperature: minMaxData["tasmax"][datasetType],
            // minTemperature: "minTemperature",
            // hotTropical: "nDaysTminMoreThan26",
        };

        // TODO if we are showing anomaly instead, we should use diverging colour schemes e.g d3.interpolateRdBu
        const variableColourScheme = {
            // Hot Weather
            'cdd65': d3.interpolateYlOrBr,
            'hd35': d3.interpolateYlOrBr,
            'hd40': d3.interpolateYlOrRd,
            'hd45': d3.interpolateOrRd,
            'sd': d3.interpolateYlOrBr,

            // Precipitation
            'prpercnt': d3.interpolateBlues,
            'r50mm': d3.interpolateGnBu,
            'rx1day': d3.interpolateBlues,
            'rx5day': d3.interpolateGnBu,
            
            // Temperature
            'tasmax': d3.interpolateOrRd,
            'tasmin': d3.interpolateYlOrBr,
            'tr26': d3.interpolateYlOrBr,
            'tr29': d3.interpolateYlOrRd,
            'txx': d3.interpolateOrRd,

            // Legacy Hybdrid Data (to be removed)
            'maxTemperature': d3.interpolateYlOrRd,
            // minTemperature: d3.interpolateBlues,
            // hotTropical: d3.interpolateOrRd,
        };


        const variableLabelMap = {
            'cdd65': 'Cooling Degree Days (ref-18°C)',
            'hd35': 'Number of Hot Days (Tmax > 35°C)',
            'hd40': 'Number of Hot Days (Tmax > 40°C)',
            'hd45': 'Number of Hot Days (Tmax > 45°C)',
            'prpercnt': 'Precipitation Percent Change',
            'r50mm': 'Number of Days with Precipitation >50mm',
            'rx1day': 'Average Largest 1-Day Precipitation',
            'rx5day': 'Average Largest 5-Day Cumulative Precipitation',
            'sd': 'Number of Summer Days (Tmax > 25°C)',
            'tasmax': 'Average Maximum Surface Air Temperature',
            'tasmin': 'Average Minimum Surface Air Temperature',
            'tr26': 'Number of Tropical Nights (T-min > 26°C)',
            'tr29': 'Number of Tropical Nights (T-min > 29°C)',
            'txx': 'Maximum of Daily Max-Temperature'
        };

        const unitMap = {
            'cdd65': '°C',
            'hd35': 'Days',
            'hd40': 'Days',
            'hd45': 'Days',
            'prpercnt': '%',
            'r50mm': 'Days',
            'rx1day': 'mm',
            'rx5day': 'mm',
            'sd': 'Days',
            'tasmax': '°C',
            'tasmin': '°C',
            'tr26': 'Days',
            'tr29': 'Days',
            'txx': '°C'
        }

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
                    datasetNameMap[datasetName],
                    datasetType, 
                    datasetTimeline,
                    datasetEmission
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
                                datasetNameMap[datasetName],
                                datasetType, 
                                datasetTimeline,
                                datasetEmission
                            )} ${unitMap[datasetNameMap[datasetName]]}
                        </span>
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
                                datasetNameMap[datasetName],
                                datasetType,
                                datasetTimeline,
                                datasetEmission
                            )} 
                        ${unitMap[datasetNameMap[datasetName]]}
                        </span>
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
