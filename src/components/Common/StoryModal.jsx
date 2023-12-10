import React from 'react'
import content from "../../assets/Content.png";

export default function StoryModal({ storySelected, setStorySelected }) {
    return (
        <div className='custom-modal'>
            <div className='modal-inner'>
                <div className='modal-header'>
                    <div className='storyModalTop'>
                        <span>Impact</span>
                        <h2>{storySelected['title']}</h2>
                        <ul class="tags">
                            <li>Urban</li>
                            <li>Pollution</li>
                        </ul>
                    </div>
                    <div className='close' onClick={() => { setStorySelected(null); console.log('closing the modal') }}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L8.58579 10L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L10 11.4142L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L11.4142 10L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L10 8.58579L6.70711 5.29289Z" fill="#5C5F62" />
                        </svg>
                    </div>
                </div>
                <div className='modal-body'>
                    <div className='storyModalBodyTop'>
                        <div className='left'>
                            <h4>Shidhulai Sanivar Sangstha</h4>
                            <p>OPERATES IN <span>DHAKA</span></p>
                            <p>BASED IN <span>GERMANY</span></p>
                        </div>
                        <div className='right'>
                            <a href={storySelected['url']}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_899_2170)">
                                        <path d="M7.5 12.5L12.5 7.5" stroke="#FC714A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M9.16675 4.99993L9.55258 4.55326C10.3341 3.77187 11.394 3.33293 12.4991 3.33301C13.6043 3.33309 14.6641 3.77217 15.4455 4.55368C16.2269 5.33518 16.6658 6.39509 16.6658 7.50022C16.6657 8.60536 16.2266 9.6652 15.4451 10.4466L15.0001 10.8333" stroke="#FC714A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M10.8332 15.0001L10.5024 15.4451C9.71179 16.2269 8.64474 16.6654 7.53283 16.6654C6.42092 16.6654 5.35387 16.2269 4.56325 15.4451C4.17355 15.0597 3.86416 14.6009 3.65301 14.0952C3.44185 13.5895 3.33313 13.0469 3.33313 12.4988C3.33313 11.9508 3.44185 11.4082 3.65301 10.9025C3.86416 10.3967 4.17355 9.93791 4.56325 9.55258L4.99991 9.16675" stroke="#FC714A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_899_2170">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                OPEN LINK
                            </a>
                        </div>
                    </div>
                    <div className='storyModalBodyImage'>
                        {/* <img src={content} /> */}
                        <iframe src={storySelected['url']} width="100%" height="100%"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}
