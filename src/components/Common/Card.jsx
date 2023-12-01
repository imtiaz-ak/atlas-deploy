import React from 'react'
import cardimg from '../../assets/card-img.png'

export default function Card(title,district,country,humbnailUrl,url) {
  return (
    <div className='custom-card'>
        <div className='card-img'>
            <img src={cardimg} />
        </div>
        <div className='card-body'>
            <span>Impact</span>
            <h2>Building climate resilience into Bangladesh's coastal communities</h2>
            <ul className='card-tags'>
                <li>Urban</li>
                <li>Pollution</li>
            </ul>
            <h3>Shidhulai Sanivar Sangstha</h3>
            <div className='infos'>
                <p>OPERATES IN <span>DHAKA</span></p><p>BASED IN <span>GERMANY</span></p>
            </div>
        </div>
    </div>
  )
}
