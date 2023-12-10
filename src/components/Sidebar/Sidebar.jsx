import "./Sidebar.css";
import MediaCardVideo from "../Common/MediaCard/MediaCardVideo";
import SidebarContext from "../../context/SidebarContext";
import DistrictContext from "../../context/DistrictContext";
import DatasetContext from "../../context/DatasetContext";
import stories from "../../data/climate_stories.json";
import worldBankData from "../../data/world_bank_data.json"
import districtMetaData from "../../data/district_meta.json"
import { useContext, useState } from "react";
import districtToDivision from '../../data/districts_to_division.json'
import ngoList from '../../data/ngo_list.json'
import EntityCard from "../Common/EntityCard/EntityCard";
import info from "../../assets/info.svg";
import Card from "../Common/Card";
import Card2 from "../Common/Card2";
import HelpContext from "../../context/HelpContext";

export default function Sidebar({ setStorySelected }) {
    const [entityTab, setEntityTab] = useState('organisations')
    const [storyTab, setStoryTab] = useState('resilience')

    const { setHelpState } = useContext(HelpContext)

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

    const unitMap = {
        'cdd65': 'Days',
        'hd35': 'Days',
        'hd40': 'Days',
        'hd45': 'Days',
        'prpercnt': '%',
        'r50mm': 'Days',
        'rx1day': 'mm',
        'rx5day': 'mm',
        'sd': 'Days',
        'tasmax': '°C',
        'tasmin': '°C',
        'tr26': 'Days',
        'tr29': 'Days',
        'txx': '°C'
    }

    const currentUnit = unitMap[datasetNameMap[datasetConfig?.name]]

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
            <section className={className} style={sidebarState.active ? { top: "80px" } : { top: "100%" }}>
                {sidebarState.active ?
                    <div className="sidebar__container">
                        <button
                            tabIndex="-1"
                            className="close-sidebar"
                            id="actual-sidebar"
                            onClick={toggleSidebar}>
                            +
                        </button>
                        <div className="sidebar__container__heading">
                            <h4 className="p-font-size-75 font-color-2">DISTRICT</h4>
                            <h2 className="p-font-size-400">{district?.name}</h2>
                            <p className="sidebar_container_para">{districtMetaData[district?.name]?.description}</p>
                            <ul class="tags">
                                {
                                    districtMetaData[district?.name]?.tags.map((e) => {
                                        return (
                                            <><li>{e}</li></>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                        <hr />
                        <div className="sidebar__container__details">
                            <h4 className="p-font-size-75 font-color-2" style={{ fontWeight: "600", marginBottom: "2px" }}>
                                PROJECTED CHANGE IN
                            </h4>
                            <h2 className="p-font-size-400" style={{ color: "#FC714A" }}>{datasetConfig?.name}</h2>
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
                                    <h4 className="p-font-size-75 font-color-2" style={{ fontWeight: "600", marginBottom: "2px" }}>
                                        1995-2014
                                    </h4>
                                    <h2 className="p-font-size-400">
                                        {worldBankData[datasetNameMap[datasetConfig.name]]['climatology']['1995-2014']['historical'][districtToDivision[district?.name]]} {currentUnit}
                                    </h2>
                                </div>
                                <span className="sidebar__arrow" style={{ fontSize: "38px" }}>&rarr;</span>
                                <div>
                                    <h4 className="p-font-size-75 font-color-2" style={{ fontWeight: "600", marginBottom: "2px" }}>
                                        {datasetConfig.timeline}
                                    </h4>
                                    <h2 className="p-font-size-400">
                                        {worldBankData[datasetNameMap[datasetConfig.name]]['climatology'][datasetConfig.timeline][datasetConfig.timeline == '1995-2014' ? 'historical' : datasetConfig.emission][districtToDivision[district?.name]]} {currentUnit}
                                    </h2>
                                </div>
                            </div>
                            <div>
                                <h4 className="p-font-size-75 font-color-2">{(worldBankData[datasetNameMap[datasetConfig.name]]['climatology'][datasetConfig.timeline][datasetConfig.timeline == '1995-2014' ? 'historical' : datasetConfig.emission][districtToDivision[district?.name]] - worldBankData[datasetNameMap[datasetConfig.name]]['climatology']['1995-2014']['historical'][districtToDivision[district?.name]]) >= 0 ? 'Increase' : 'Decrease'}</h4>
                                <h2 className="p-font-size-400">{(worldBankData[datasetNameMap[datasetConfig.name]]['climatology'][datasetConfig.timeline][datasetConfig.timeline == '1995-2014' ? 'historical' : datasetConfig.emission][districtToDivision[district?.name]] - worldBankData[datasetNameMap[datasetConfig.name]]['climatology']['1995-2014']['historical'][districtToDivision[district?.name]]).toFixed(2)} {currentUnit}</h2>
                            </div>
                        </div>
                        <hr />
                        <div className="sidebar__container__buttonGroup" style={{ marginTop: "28px" }}>

                            <div className="stories-heading">
                                <h2 className="p-font-size-400">Stories <img src={info} style={{ cursor: 'pointer' }} onClick={() => { setHelpState({ helpTitle: 'Stories', helpText: `stories`, active: true }) }} /></h2>
                                <a href="https://forms.gle/WGtL6AawiSqt8CKa6">
                                    <p>SUBMIT STORY</p>
                                </a>
                            </div>
                            <div className="btn-group-inner" style={{ border: "1px solid rgb(0 0 0 / 12%)", borderRadius: "4px" }}>
                                {
                                    storyTab == 'resilience' ?
                                        <button className="customBtn sidebar__container__active_btn" style={{ borderRadius: "4px 0 0 4px", border: "0" }} onClick={() => { setStoryTab('resilience') }}>
                                            <span>Resilience</span>
                                            <span>{stories[district?.name]?.resilience?.length ? stories[district.name].resilience.length : 0}</span>
                                        </button> :
                                        <button className="customBtn sidebar__container__inactive_btn" style={{ borderRadius: "4px 0 0 4px", border: "0" }} onClick={() => { setStoryTab('resilience') }}>
                                            <span>Resilience</span>
                                            <span>{stories[district?.name]?.resilience?.length ? stories[district.name].resilience.length : 0}</span>
                                        </button>
                                }

                                {
                                    storyTab == 'impact' ?
                                        <button className="customBtn sidebar__container__active_btn" style={{ borderRadius: "0 4px 4px 0", border: "0" }} onClick={() => { setStoryTab('impact') }}>
                                            <span>Impact</span>
                                        </button> :
                                        <button className="customBtn sidebar__container__inactive_btn" style={{ borderRadius: "0 4px 4px 0", border: "0" }} onClick={() => { setStoryTab('impact') }}>
                                            <span>Impact</span>
                                            <span>{stories[district?.name]?.impact?.length ? stories[district.name].impact.length : 0}</span>
                                        </button>

                                }
                            </div>


                        </div>
                        <div className="stories-container">
                            {
                                storyTab == 'resilience' ? (<>
                                    {(stories[district?.name]?.resilience)?.length ? (stories[district?.name]['resilience']).map((e, index) => {
                                        console.log(e);
                                        return (
                                            <Card
                                                story={e}
                                                title={e['title']}
                                                district={district?.name}
                                                description={e['description']}
                                                country="Bangladesh"
                                                thumbnailUrl={e['image']}
                                                tags={e['tags']}
                                                url={e['url']}
                                                storySetter={setStorySelected}
                                                type='RESILIENCE'
                                            />
                                        )
                                    }) :
                                        <></>}
                                </>) : (<>
                                    {(stories[district?.name]?.impact)?.length ? (stories[district?.name]['impact']).map((e, index) => {
                                        return (
                                            <Card
                                                story={e}
                                                title={e['title']}
                                                district={district?.name}
                                                description={e['description']}
                                                country="Bangladesh"
                                                thumbnailUrl={e['image']}
                                                url={e['url']}
                                                tags={e['tags']}
                                                storySetter={setStorySelected}
                                                type='IMPACT'
                                            />
                                        )
                                    }) : <></>}
                                </>)
                            }

                        </div>

                        <div className="sidebar__container__buttonGroup" style={{ marginTop: "28px" }}>

                            <div className="stories-heading">

                                <h2 className="p-font-size-400">Entities <img src={info} style={{ cursor: 'pointer' }} onClick={() => { setHelpState({ helpTitle: 'Entities', helpText: `entities`, active: true }) }} /></h2>
                                <a href="https://forms.gle/aXQmMQnAUKGzQcbG8">
                                    <p>SUBMIT ENTITIES</p>
                                </a>
                            </div>

                            <div className="btn-group-inner" style={{ border: "1px solid rgb(0 0 0 / 12%)", borderRadius: "4px" }}>
                                {
                                    entityTab == 'organisations' ?
                                        <button className="customBtn sidebar__container__active_btn" style={{ borderRadius: "4px 0 0 4px", border: "0" }} onClick={() => { setEntityTab('organisations') }}>
                                            <span>Organisations</span>
                                            <span>{ngoDataByDistrict[district?.name]?.length ? ngoDataByDistrict[district?.name].length : 0}</span>
                                        </button> :
                                        <button className="customBtn sidebar__container__inactive_btn" style={{ borderRadius: "4px 0 0 4px", border: "0" }} onClick={() => { setEntityTab('organisations') }}>
                                            <span>Organisations</span>
                                            <span>{ngoDataByDistrict[district?.name]?.length ? ngoDataByDistrict[district?.name].length : 0}</span>
                                        </button>
                                }

                                {
                                    entityTab == 'initiatives' ?
                                        <button className="customBtn sidebar__container__active_btn" style={{ borderRadius: "0 4px 4px 0", border: "0" }} onClick={() => { setEntityTab('initiatives') }}>
                                            <span>Initiatives</span>
                                            <span>{0}</span>
                                        </button> :
                                        <button className="customBtn sidebar__container__inactive_btn" style={{ borderRadius: "0 4px 4px 0", border: "0" }} onClick={() => { setEntityTab('initiatives') }}>
                                            <span>Initiatives</span>
                                            <span>{0}</span>
                                        </button>

                                }
                            </div>


                        </div>
                        <div className="stories-container">
                            {
                                entityTab == 'organisations' ? (<>
                                    {(ngoDataByDistrict[district?.name])?.length ? (ngoDataByDistrict[district?.name]).map((e) => {
                                        return (
                                            <Card2
                                                title={e['name']}
                                                district={district?.name}
                                                description={e['description']}
                                                tags={e['tags']}
                                                country={e['country']}
                                                address={e['address']}
                                            />

                                        )
                                    }) : <></>}
                                </>) : (<>
                                    {/* {(stories[district?.name])?.length ? (stories[district?.name]).map((e) => {
                                        return (
                                            <Card2 />

                                        )
                                    }) : <></>} */}
                                </>)
                            }

                        </div>

                    </div>
                    :
                    <div className="sidebar__container instruction">
                        <span>USER GUIDE</span>
                        <h2>Climate Atlas for Bangladesh <span>BETA</span></h2>
                        <p>The Climate Atlas is a comprehensive tool designed to provide users with valuable insights into the climate and environmental landscape of Bangladesh. Navigate through districts, explore climate stories, and learn about the incredible initiatives shaping the nation's response to climate change.</p>
                        <div className="composition">
                            <h4>DISTRICT NAVIGATION</h4>
                            <p>Hover over any district on the map to see a brief description of that region. Click on the districts to get more specific information on GHG emissions, Stories we have from that region, and listed entities currently working in that region. </p>
                        </div>
                        <div className="composition">
                            <h4>INFORMATION CARDS</h4>
                            <p>Utilize information cards (i cards) to understand key terms and concepts related to navigate the website better. </p>
                        </div>
                        <div className="composition">
                            <h4>SEARCH FUNCTION</h4>
                            <p>Locate specific districts, NGOs, or initiatives using the search bar.Streamline your exploration based on your interests and research objectives. </p>
                        </div>
                        <div className="composition">
                            <h4>FEEDBACKS AND UPDATES</h4>
                            <p>Share your thoughts and suggestions with us through the provided feedback channels.Stay tuned for regular updates as we continue to expand and enhance the Climate Atlas for Bangladesh. <br />Embark on a journey of discovery, education, and inspiration as you explore the Climate Atlas for Bangladesh. Together, let's contribute to a more sustainable and resilient future for our planet.</p>
                        </div>
                        <div className="composition">
                            <h4>Data Source:</h4>
                            <p>World Bank Group, Climate Change Knowledge Portal (2023). URL: <a href="https://climateknowledgeportal.worldbank.org/" target="_blank">https://climateknowledgeportal.worldbank.org/</a> </p>
                        </div>
                    </div>
                }
            </section >
        </>
    );
}
