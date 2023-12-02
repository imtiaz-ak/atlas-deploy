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
                        <div className='close'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={toggleHelpModal}>
                                <path d="M6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L8.58579 10L5.29289 13.2929C4.90237 13.6834 4.90237 14.3166 5.29289 14.7071C5.68342 15.0976 6.31658 15.0976 6.70711 14.7071L10 11.4142L13.2929 14.7071C13.6834 15.0976 14.3166 15.0976 14.7071 14.7071C15.0976 14.3166 15.0976 13.6834 14.7071 13.2929L11.4142 10L14.7071 6.70711C15.0976 6.31658 15.0976 5.68342 14.7071 5.29289C14.3166 4.90237 13.6834 4.90237 13.2929 5.29289L10 8.58579L6.70711 5.29289Z" fill="#5C5F62" />
                            </svg>
                        </div>
                    </div>
                    <div className='modal-body'>
                        <p>{helpState.helpText}</p>
                    </div>
                    <div className='modal-footer'>
                        <button onClick={toggleHelpModal}>Collapse</button>
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
