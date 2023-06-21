import './Map.css'
import Sidebar from '../Sidebar/Sidebar'
import * as d3 from 'd3'
import { useEffect } from 'react';
import {ChoroplethMap} from "../../utils/choroplethMap"

export default function Map() {
  useEffect(async ()=>{
    const geojson = await d3.json("/data/bd_districts.geojson");
    const generatedjson = await d3.json("data/generated_districts.json");
    const stories = await d3.json("data/climate_stories.json");
    data = {
        geojson: geojson,
        climateData: generatedjson.districts,
        climateStories: stories
    };
    bdMap = new ChoroplethMap(
      {
          parentElement: "#map-vis",
      },
      data,
      // dispatcher
    );
  },[])
  return (
    <section className="map">
        <svg id="map-vis" class="map"></svg>

    </section>
  )
}
