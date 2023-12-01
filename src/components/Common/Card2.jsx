import React from 'react'

export default function Card2() {
  return (
    <div className='custom-card'>
        <div className='card-body'>
            <div className='infos'>
                <p>Organisation</p>
            </div>
            <h2>Shidhulai Sanivar Sangstha</h2>
            <div className='infos'>
                <p>OPERATES IN <span>DHAKA</span></p><p>BASED IN <span>GERMANY</span></p>
            </div>
            <h6>The non profit CODEC is fighting against water salinity, women inequality, deforestation and more with their Nature and Life proj (150 Characters)</h6>
            <ul className='card-tags'>
                <li>Urban</li>
                <li>Pollution</li>
                <li>Costal</li>
                <li>Adoptation</li>
            </ul>
            <ul className='address-info'>
                <li>
                    <p>WEBSITE</p>
                    <p>shidhulaisanuwar.com</p>
                </li>
                <li>
                    <p>EMAIL</p>
                    <p>+8801737291734</p>
                </li>
                <li>
                    <p>PHONE</p>
                    <p>hello@shidhulaisanuwar.com</p>
                </li>
            </ul>
        </div>
    </div>
  )
}
