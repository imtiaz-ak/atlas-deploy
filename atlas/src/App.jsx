import "@shopify/polaris/build/esm/styles.css";
import "./styles/App.css";
import "./styles/devP.css";
import "./styles/devA.css";

import { districts } from "./data/generated_districts.json";

import Header from "./components/Header";

import Sidebar from "./components/Sidebar/Sidebar";
import MapButton from "./components/MapButton/MapButton";
import Districts from "./components/Districts";
import Map from "./components/Map/Map"
import TempSidebar from "./components/TempSidebar";
import { useState } from "react";

function App() {
    const [districtId, setDistrictId] = useState(null);
    const district = districts.find((district) => district.id === districtId);
    const [sidebarActive, setSidebarActive] = useState(false);

    const handleDistrictIdChange = (id) => {
        setDistrictId(id);
    };

    return (
        <>
            <Header />
            <div className="main-wrapper">
                <TempSidebar
                    district={district}
                    sidebarActive={sidebarActive}
                    setSidebarActive={setSidebarActive}
                />
                <Map />
            </div>
        </>
    );
}

export default App;
