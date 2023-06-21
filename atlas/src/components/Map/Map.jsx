import './Map.css'
import Sidebar from '../Sidebar/Sidebar'
import * as d3 from 'd3'
import { useEffect } from 'react';

export default function Map() {

  return (
    <section className="map">
        <svg id="map-vis" className="map"></svg>

    </section>
  )
}
