import "./Sidebar.css";
import MediaCardVideo from "../Common/MediaCard/MediaCardVideo";
import SidebarContext from "../../context/SidebarContext";
import DistrictContext from "../../context/DistrictContext";
import stories from "../../data/climate_stories.json";
import { useContext } from "react";

export default function Sidebar() {
    const { sidebarActive, toggleSidebar } = useContext(SidebarContext);
    const { district } = useContext(DistrictContext);

    console.log(stories)

    const className = sidebarActive ? "sidebar sidebar-active" : "sidebar";
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
                            PROJECTED CHANGE IN MEAN
                        </h4>
                        <h2 className="p-font-size-400">Cooling Degree Days</h2>
                        <div className="sidebar__container__details__flex">
                            <span className="">High Carbon</span>
                            <span className="sidebar__arrow">&rarr;</span>
                            <span className="">More Climate Change</span>
                        </div>

                        <div className="sidebar__container__details__flex">
                            <div>
                                <h4 className="p-font-size-75 font-color-2">
                                    {district?.historicalData.timeRange}
                                </h4>
                                <h2 className="p-font-size-400">
                                    {district?.historicalData.maxTemperature}
                                </h2>
                            </div>
                            <span className="sidebar__arrow">&rarr;</span>
                            <div>
                                <h4 className="p-font-size-75 font-color-2">
                                    {district?.futureData.timeRange}
                                </h4>
                                <h2 className="p-font-size-400">
                                    {district?.futureData.maxTemperature}
                                </h2>
                            </div>
                        </div>
                        <div>
                            <h4 className="p-font-size-75 font-color-2">Up</h4>
                            <h2 className="p-font-size-400">+30.3</h2>
                        </div>
                    </div>
                    <div className="sidebar__container__buttonGroup">
                        <button className="customBtn">
                            <span>Stories</span>
                            <span>6</span>
                        </button>
                        <button className="customBtn">
                            <span>Entities</span>
                            <span>2</span>
                        </button>
                    </div>
                    <div className="stories-container">
                        {(stories[district?.name]) ? (stories[district?.name]).map((e) => {
                            return (
                                <MediaCardVideo
                                    title="Making Korail more habitable"
                                    district="District"
                                    coutnry="Bangladesh"
                                    entity="BRAC"
                                    entityUrl="http://www.brac.net/"
                                    desc="The non profit CODEC is fighting against water salinity, women inequality, deforestation and more with their Nature and Life project."
                                    thumbnailUrl="https://burst.shopifycdn.com/photos/business-woman-smiling-in-office.jpg?width=1850"></MediaCardVideo>
                            )
                        }) :
                            <MediaCardVideo
                                title="No Stories to Show"
                                district="District"
                                coutnry="Bangladesh"
                                entity="Atlas"
                                entityUrl="http://www.brac.net/"
                                desc="There are no more relevant stories to show. However more stories will come. Stay tuned to find out."
                                thumbnailUrl=""></MediaCardVideo>}
                    </div>
                </div>
            </section>
        </>
    );
}
