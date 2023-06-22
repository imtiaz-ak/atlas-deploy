import '@shopify/polaris/build/esm/styles.css';
import './styles/App.css';
import './styles/devP.css';
import './styles/devA.css';

import Sidebar from './components/Sidebar/Sidebar';
import MapButton from './components/MapButton/MapButton';
import Map from './components/Map/Map';

function App() {
  return (
    <>
      <Map />
    </>
  )
}

export default App
