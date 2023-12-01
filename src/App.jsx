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
import { SidebarProvider } from "./context/SidebarContext";
import { DatasetProvider } from "./context/DatasetContext";
import { HelpProvider } from "./context/HelpContext";
import InvisibleOverlay from "./components/InvisibleOverlay";
import Selectors from "./components/Selectors/Selectors";
import Slider from "./components/Slider";
import Modal from "./components/Common/Modal";

function App() {
    return (
        <>
            <Header />

            <DatasetProvider>
                <SidebarProvider>
                    <DistrictProvider>
                        <div className="main-wrapper">
                            <div className="map-container-outer">
                                <Selectors />
                                <Slider />
                                <Map />
                                {/* <Modal /> */}
                            </div>
                            <Sidebar />
                        </div>
                    </DistrictProvider>
                </SidebarProvider>
            </DatasetProvider>
        </>
    );
}

export default App;
