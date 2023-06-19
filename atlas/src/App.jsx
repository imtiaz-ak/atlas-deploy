import '@shopify/polaris/build/esm/styles.css';
import './styles/App.css';
import './styles/devP.css';
import './styles/devA.css';


import Sidebar from './components/Sidebar/Sidebar';
import MapButton from './components/MapButton/MapButton';

function App() {

  return (
    <>
      <MapButton/>
      <Sidebar />
    </>
  )
}

export default App
