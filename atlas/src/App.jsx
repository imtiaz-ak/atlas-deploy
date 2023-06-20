import "@shopify/polaris/build/esm/styles.css";
import "./styles/App.css";
import "./styles/devP.css";
import "./styles/devA.css";

import Header from "./components/Header";

import Sidebar from "./components/Sidebar/Sidebar";
import MapButton from "./components/MapButton/MapButton";

function App() {
    return (
        <>
            <Header />
            <MapButton />
            <Sidebar />
        </>
    );
}

export default App;
