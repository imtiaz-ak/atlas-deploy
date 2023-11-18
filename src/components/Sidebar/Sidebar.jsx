import "./Sidebar.css";
import MediaCardVideo from "../Common/MediaCard/MediaCardVideo";
import SidebarContext from "../../context/SidebarContext";
import DistrictContext from "../../context/DistrictContext";
import DatasetContext from "../../context/DatasetContext";
import stories from "../../data/climate_stories.json";
import worldBankData from "../../data/world_bank_data.json"
import { useContext } from "react";
import districtToDivision from '../../data/districts_to_division.json'
import ngoList from '../../data/ngo_list.json'
import EntityCard from "../Common/EntityCard/EntityCard";

export default function Sidebar() {
    const { sidebarState, changeSidebarTab, toggleSidebar } = useContext(SidebarContext);
    const { district } = useContext(DistrictContext);
    const { datasetConfig } = useContext(DatasetContext)

    const datasetNameMap = {
        'Cooling Degree Days': 'cdd65',
        'Hot Days Over 35°C': "hd35",
        'Hot Days Over 40°C': 'hd40',
        'Hot Days Over 45°C': 'hd45',
        'Precipitation Percent Change': 'prpercnt',
        'Above 50mm': 'r50mm',
        'Largest 1-Day Precipitation': 'rx1day',
        'Largest 5-Day Precipitation': 'rx5day',
        'Summer Days': 'sd',
        'Surface Air Maximum': 'tasmax',
        'Surface Air Minimum': 'tasmin',
        'Maximum Over 26°C': 'tr26',
        'Maximum Over 29°C': 'tr29',
        'Single Day Maximum': 'txx'
    }
    console.log(stories)

    const ngoDataByDistrict = {};

    ngoList.forEach(item => {
        const district = item.district;

        // Check if the district exists in the dataByDistrict object
        if (!ngoDataByDistrict[district]) {
            // If it doesn't exist, create an empty array for the district
            ngoDataByDistrict[district] = [];
        }

        // Push the current item to the array for the corresponding district
        ngoDataByDistrict[district].push(item);
    });

    const className = sidebarState.active ? "sidebar sidebar-active" : "sidebar";
    return (
        <>
            <section className={className}>
                <div className="sidebar__container">
                    <button
                        tabIndex="-1"
                        className="close-sidebar"
                        onClick={toggleSidebar}>
                        +
                    </button>
                    <div className="sidebar__container__heading">
                        <h4 className="p-font-size-75 font-color-2">REGION</h4>
                        <h2 className="p-font-size-400">{district?.name}</h2>
                    </div>
                    <hr />
                    <div className="sidebar__container__details">
                        <h4 className="p-font-size-75 font-color-2">
                            PROJECTED CHANGE IN
                        </h4>
                        <h2 className="p-font-size-400">{datasetConfig?.name}</h2>
                        <div className="sidebar__container__details__flex">
                            {
                                datasetConfig.emission == 'ssp245' ? (
                                    <>
                                        <span className="">Low Carbon</span>
                                        <span className="sidebar__arrow">&rarr;</span>
                                        <span className="">Less Climate Change</span>
                                    </>
                                ) :
                                    <>
                                        <span className="">High Carbon</span>
                                        <span className="sidebar__arrow">&rarr;</span>
                                        <span className="">More Climate Change</span>
                                    </>
                            }

                        </div>

                        <div className="sidebar__container__details__flex">
                            <div>
                                <h4 className="p-font-size-75 font-color-2">
                                    1995-2014
                                </h4>
                                <h2 className="p-font-size-400">
                                    {worldBankData[datasetNameMap[datasetConfig.name]]['climatology']['1995-2014']['historical'][districtToDivision[district?.name]]}
                                </h2>
                            </div>
                            <span className="sidebar__arrow">&rarr;</span>
                            <div>
                                <h4 className="p-font-size-75 font-color-2">
                                    {datasetConfig.timeline}
                                </h4>
                                <h2 className="p-font-size-400">
                                    {worldBankData[datasetNameMap[datasetConfig.name]]['climatology'][datasetConfig.timeline][datasetConfig.timeline == '1995-2014' ? 'historical' : datasetConfig.emission][districtToDivision[district?.name]]}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <h4 className="p-font-size-75 font-color-2">{(worldBankData[datasetNameMap[datasetConfig.name]]['climatology'][datasetConfig.timeline][datasetConfig.timeline == '1995-2014' ? 'historical' : datasetConfig.emission][districtToDivision[district?.name]] - worldBankData[datasetNameMap[datasetConfig.name]]['climatology']['1995-2014']['historical'][districtToDivision[district?.name]]) >= 0 ? 'Increase' : 'Decrease'}</h4>
                            <h2 className="p-font-size-400">{(worldBankData[datasetNameMap[datasetConfig.name]]['climatology'][datasetConfig.timeline][datasetConfig.timeline == '1995-2014' ? 'historical' : datasetConfig.emission][districtToDivision[district?.name]] - worldBankData[datasetNameMap[datasetConfig.name]]['climatology']['1995-2014']['historical'][districtToDivision[district?.name]]).toFixed(2)}</h2>
                        </div>
                    </div>
                    <div className="sidebar__container__buttonGroup">
                        {
                            sidebarState.currentTab == 'stories' ?
                                <button className="customBtn sidebar__container__active_btn" onClick={() => { changeSidebarTab('stories') }}>
                                    <span>Stories</span>
                                    <span>{stories[district?.name]?.length ? stories[district.name].length : 0}</span>
                                </button> :
                                <button className="customBtn sidebar__container__inactive_btn" onClick={() => { changeSidebarTab('stories') }}>
                                    <span>Stories</span>
                                    <span>{stories[district?.name]?.length ? stories[district.name].length : 0}</span>
                                </button>
                        }

                        {
                            sidebarState.currentTab == 'entities' ?
                                <button className="customBtn sidebar__container__active_btn" onClick={() => { changeSidebarTab('entities') }}>
                                    <span>Entities</span>
                                    <span>{ngoDataByDistrict[district?.name]?.length ? ngoDataByDistrict[district?.name].length : 0}</span>
                                </button> :
                                <button className="customBtn sidebar__container__inactive_btn" onClick={() => { changeSidebarTab('entities') }}>
                                    <span>Entities</span>
                                    <span>{ngoDataByDistrict[district?.name]?.length ? ngoDataByDistrict[district?.name].length : 0}</span>
                                </button>

                        }


                    </div>
                    <div className="stories-container">
                        {
                            sidebarState.currentTab == 'stories' ? (<>
                                {(stories[district?.name])?.length ? (stories[district?.name]).map((e) => {
                                    return (
                                        <MediaCardVideo
                                            title={e['title']}
                                            district={district?.name}
                                            country="Bangladesh"
                                            thumbnailUrl={e['image']}
                                            url={e['url']}></MediaCardVideo>
                                    )
                                }) :
                                    <></>}
                            </>) : (<>
                                {(ngoDataByDistrict[district?.name])?.length ? (ngoDataByDistrict[district?.name]).map((e) => {
                                    return (
                                        <EntityCard
                                            title={e['name']}
                                            address={e.address}
                                            district={district?.name}
                                            country={e.country}></EntityCard>
                                    )
                                }) : <></>}
                            </>)
                        }

                    </div>
                </div>
            </section>
        </>
    );
}
