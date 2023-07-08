import React from 'react'
import TempSidebar from '../TempSidebar';
import Selectors from '../Selectors/Selectors';

function InvisibleOverlay() {
  return (
    <div className="invisible-overlay">
        <div className="overlay-wrapper">
        <TempSidebar />
        <Selectors />
        </div>
    </div>
  )
}

export default InvisibleOverlay;