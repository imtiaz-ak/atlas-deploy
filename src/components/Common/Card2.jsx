import React from 'react'

export default function Card2({ title, description, district, country, address, tags }) {
    console.log(title, '<---- THIS IS TITLE')
    return (
        <div className='custom-card'>
            <div className='card-body'>
                <div className='infos'>
                    <p>Organisation</p>
                </div>
                <h2>{title}</h2>
                <div className='infos'>
                    <p>OPERATES IN <span>{district}</span></p><p>BASED IN <span>{country}</span></p>
                </div>
                <h6>{description}</h6>
                <ul className='card-tags'>
                    {
                        tags.map((e) => {
                            return (<li>{e}</li>)
                        })
                    }
                </ul>
                <ul className='address-info'>
                    <li>
                        <p>Address</p>
                        <p>{address}</p>
                    </li>
                    {/* <li>
                        <p>EMAIL</p>
                        <p>+8801737291734</p>
                    </li>
                    <li>
                        <p>PHONE</p>
                        <p>hello@shidhulaisanuwar.com</p>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}
