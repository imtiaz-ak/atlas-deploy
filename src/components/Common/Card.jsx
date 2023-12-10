import React from 'react'
import cardimg from '../../assets/card-img.png'

export default function Card({ story, title, district, description, country, tags, thumbnailUrl, url, storySetter }) {
    return (
        <a href={url} target="_blank">
            <div className='custom-card' style={{ height: '97%' }}>
                <div className='card-img'>
                    <img src={thumbnailUrl} />
                </div>
                <div className='card-body'>
                    <span>Impact</span>
                    <h2>{title}</h2>
                    <ul className='card-tags'>
                        {tags?.map((e) => {
                            return (
                                <li>{e}</li>
                            )
                        })}
                        {/* <li>Urban</li>
                        <li>Pollution</li> */}
                    </ul>
                    {/* <h3>Shidhulai Sanivar Sangstha</h3>
                <div className='infos'>
                    <p>OPERATES IN <span>{district}</span></p><p>BASED IN <span>{country}</span></p>
                </div> */}
                </div>
            </div>
        </a >
    )
}
