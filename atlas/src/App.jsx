import "@shopify/polaris/build/esm/styles.css";
import "./styles/App.css";
import "./styles/devP.css";
import "./styles/devA.css";

import { districts } from "./data/generated_districts.json";

import Header from "./components/Header";

import Sidebar from "./components/Sidebar/Sidebar";
import MapButton from "./components/MapButton/MapButton";
import Map from "./components/Map/Map";
import TempSidebar from "./components/TempSidebar";
import { useState } from "react";
import { DistrictProvider } from "./context/DistrictContext";

function App() {
    const [sidebarActive, setSidebarActive] = useState(false);

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <DistrictProvider>
                    <TempSidebar
                        sidebarActive={sidebarActive}
                        setSidebarActive={setSidebarActive}
                    />
                    <Map setSidebarActive={setSidebarActive} />
                </DistrictProvider>
            </div>
        </>
    );
}

export default App;
