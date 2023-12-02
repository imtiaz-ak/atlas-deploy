import React from 'react'

export default function ResponsiveCardMenu({toggleSlider,toggleintensitySelectorOn}) {
  return (
    <ul className='responsivecardmenu'>
        <li onClick={()=>toggleintensitySelectorOn(true)}>GHG Emissions</li>
        <li onClick={()=>toggleSlider(true)}>time period</li>
    </ul>
  )
}
