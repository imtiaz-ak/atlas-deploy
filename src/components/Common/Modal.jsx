import React, { useContext } from 'react'
import HelpContext from '../../context/HelpContext'

export default function Modal() {
    const { helpState, toggleHelpModal } = useContext(HelpContext)

    if (helpState['active'] === true) {
        return (
            <div className='custom-modal'>
                <div className='modal-inner'>
                    <div className='modal-header'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <g clip-path="url(#clip0_217_7764)">
                                <path d="M10 8H10.0083" stroke="#5C5F62" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M9.16663 10.5H9.99996V13.8333H10.8333" stroke="#5C5F62" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10 3C16 3 17.5 4.5 17.5 10.5C17.5 16.5 16 18 10 18C4 18 2.5 16.5 2.5 10.5C2.5 4.5 4 3 10 3Z" stroke="#5C5F62" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_217_7764">
                                    <rect width="20" height="20" fill="white" transform="translate(0 0.5)" />
                                </clipPath>
                            </defs>
                        </svg>
                        <h3>{helpState.helpTitle}</h3>
                        <div className='close' style={{ cursor: 'pointer' }}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleHelpModal}>
                                <path d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L8.58579 10L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L10 11.4142L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L11.4142 10L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L10 8.58579L6.70711 5.29289Z" fill="#5C5F62" />
                            </svg>
                        </div>
                    </div>
                    <div className='modal-body'>
                        {helpState.helpText == 'guide' ?
                            <>
                                <h2>Climate Atlas for Bangladesh <span>BETA</span></h2>
                                <p>The Climate Atlas is a comprehensive tool designed to provide users with valuable insights into the climate and environmental landscape of Bangladesh. Navigate through districts, explore climate stories, and learn about the incredible initiatives shaping the nation's response to climate change.</p>
                                <div className="composition">
                                    <h4>DISTRICT NAVIGATION</h4>
                                    <p>Hover over any district on the map to see a brief description of that region. Click on the districts to get more specific information on GHG emissions, Stories we have from that region, and listed entities currently working in that region. </p>
                                </div>
                                <div className="composition">
                                    <h4>INFORMATION CARDS</h4>
                                    <p>Hover over any district on the map to see a brief description of that region. Click on the districts to get more specific information on GHG emissions, Stories we have from that region, and listed entities currently working in that region. </p>
                                </div>
                                <div className="composition">
                                    <h4>SEARCH FUNCTION</h4>
                                    <p>Hover over any district on the map to see a brief description of that region. Click on the districts to get more specific information on GHG emissions, Stories we have from that region, and listed entities currently working in that region. </p>
                                </div>
                                <div className="composition">
                                    <h4>FEEDBACKS AND UPDATES</h4>
                                    <p>Hover over any district on the map to see a brief description of that region. Click on the districts to get more specific information on GHG emissions, Stories we have from that region, and listed entities currently working in that region. </p>
                                </div>
                                <div className="composition">
                                    <h4>Data Source:</h4>
                                    <p>World Bank Group, Climate Change Knowledge Portal (2023). URL: <a href="https://climateknowledgeportal.worldbank.org/" target='_blank'>https://climateknowledgeportal.worldbank.org/</a> </p>
                                </div>
                            </> :
                            <></>
                        }

                        {
                            helpState.helpText == 'stories' ?
                                <>
                                    <div className="composition">
                                        <h4>Description</h4>
                                        <p>We believe that every story has the power to inspire, educate, and drive positive action. Whether you've witnessed the impacts of climate change or have a story of resilience to tell, we want to hear from you. </p>
                                    </div>
                                    <div className="composition">
                                        <h4>Why Share Your Story:</h4>
                                        <p>Climate change affects us all, and your story can make a difference. By sharing your experiences, you contribute to a collective narrative that highlights the urgency of addressing climate change and the strength of communities in the face of adversity </p>
                                    </div>
                                    <div className="composition">
                                        <h4>Categories:</h4>
                                        <p> Resilience Stories: These stories focus on how individuals, communities, or organizations have demonstrated resilience and adaptability in the face of climate change challenges. Share your strategies, innovations, and success stories in mitigating or adapting to climate change.
                                            <br />
                                            Impact Stories: Impact stories shed light on the real consequences of climate change. Whether it's extreme weather events, sea-level rise, biodiversity loss, or other climate-related issues, your story can help us understand the human and environmental impacts of this global crisis.
                                        </p>
                                    </div>
                                    <div className="composition">
                                        <h4>How It Works:</h4>
                                        <p> Submission Form: To contribute your story, simply fill out our submission form. You'll be prompted to choose between the "Resilience" and "Impact" categories.
                                            <br />
                                            Review and Publication: Our team will review your submission, and if it aligns with our mission, we will feature it on our platform. Your story has the potential to inspire others and drive action against climate change.
                                        </p>
                                    </div>
                                    <div className="composition">
                                        <h4>Get Started:</h4>
                                        <p>
                                            Ready to share your story? Click the link below to access our submission form and be a part of the Stories of Change movement. Together, we can make a difference and create a more sustainable future for all.
                                        </p>
                                    </div>

                                </> : <></>
                        }
                        {
                            helpState.helpText == 'entities' ?
                                <>
                                    <p>At Stories of Change, we believe that addressing climate change requires a collective effort from various entities. Our platform recognizes two main types of entities—Organizations and Initiatives—each playing a vital role in the fight against climate change. Here, we clarify what these entities are and distinguish between their types to eliminate any confusion.</p>
                                    <div className="composition">
                                        <h4>Organizations:</h4>
                                        <h4>Registered Non-Governmental Organizations (NGOs)</h4>
                                        <p>Description: Organizations are formal entities that are officially registered as Non-Governmental Organizations (NGOs). They are often structured and have a specific mission, governance, and operational framework in place. NGOs dedicated to climate action are crucial for driving impactful change at local, national, and international levels. </p>
                                    </div>
                                    <div className="composition">
                                        <h4>Initiatives:</h4>
                                        <h4>All Other Climate Action Efforts</h4>
                                        <p>Description: Initiatives encompass a wide range of climate action efforts that may or may not be formally registered as NGOs. These include grassroots movements, community projects, volunteer-led initiatives, educational programs, awareness campaigns, and innovative solutions aimed at addressing climate change challenges. </p>
                                    </div>
                                </> : <></>
                        }
                        {
                            (helpState.helpText != 'guide') && (helpState.helpText != 'stories') && (helpState.helpText != 'entities') ?
                                <>
                                    <p>{helpState.helpText}</p>
                                </> : <></>
                        }

                    </div>
                    <div className='modal-footer'>
                        <button onClick={toggleHelpModal} style={{ cursor: "pointer" }}>Collapse</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )
    }


}
