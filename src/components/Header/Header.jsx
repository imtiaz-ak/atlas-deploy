import React from "react";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import info from "../../assets/info.svg";
import { useState } from "react";
import stories from "../../data/climate_stories.json";

const performSearch = (query) => {
    const result = {}

    result['impact'] = []
    result['resilience'] = []

    const queryList = query.toLowerCase().split(/\s+/);

    for (const word of queryList) {
        for (const district of Object.keys(stories)) {
            for (const s of stories[district]['impact']) {
                // console.log(s?.keyword)
                if (s?.keywords?.includes(word)) {
                    result['impact'].push(s)
                }
            }
            for (const s of stories[district]['resilience']) {
                if (s?.keywords?.includes(word)) {
                    result['resilience'].push(s)
                }
            }

        }
    }
    console.log(result, '<---- SEARCH RESULTS')
    return result

}

function Header() {
    const [searchBarOpen, setSearchBarOpen] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResult, setSearchResult] = useState(null)

    const runSearch = () => {
        setSearchResult(performSearch(searchQuery))
    }

    return (
        <header className="header">
            <div className="header__container">
                <Left />
                <Center searchQuery={searchQuery} setSearchQuery={setSearchQuery} setSearchBarOpen={setSearchBarOpen} runSearch={runSearch} />
                <Right />
            </div>
            <div className="search-result" style={searchBarOpen ? { height: "608px", visibility: "visible", opacity: "1" } : {}}>
                <h4>Impact Stories <img src={info} /></h4>
                <div className="result-section">
                    <a href="/" target="_blank">
                        <div className='custom-card' style={{ height: '97%' }}>
                            <div className='card-body'>
                                <span>Impact</span>
                                <h2>Building climate resilience into Bangladesh's coastal communities</h2>
                                <ul className='card-tags'>
                                    <li>Urban</li>
                                    <li>Pollution</li>
                                </ul>
                                <h3>Shidhulai Sanivar Sangstha</h3>
                                <div className='infos'>
                                    <p>OPERATES IN <span>DHAKA</span></p><p>BASED IN <span>BANGLADESH</span></p>
                                </div>
                            </div>
                        </div>
                    </a >

                    {
                        searchResult?.impact?.map((e) => {
                            return (
                                <a href="/" target="_blank">
                                    <div className='custom-card' style={{ height: '97%' }}>
                                        <div className='card-body'>
                                            <span>Impact</span>
                                            <h2>Building climate resilience into Bangladesh's coastal communities</h2>
                                            <ul className='card-tags'>
                                                <li>Urban</li>
                                                <li>Pollution</li>
                                            </ul>
                                            <h3>Shidhulai Sanivar Sangstha</h3>
                                            <div className='infos'>
                                                <p>OPERATES IN <span>DHAKA</span></p><p>BASED IN <span>BANGLADESH</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a >
                            )
                        })
                    }


                </div>
                <h4>Resilience Stories <img src={info} /></h4>
                <div className="result-section">
                    {
                        searchResult?.resilience?.map((e) => {
                            return (
                                <a href="/" target="_blank">
                                    <div className='custom-card' style={{ height: '97%' }}>
                                        <div className='card-body'>
                                            <span>Impact</span>
                                            <h2>Building climate resilience into Bangladesh's coastal communities</h2>
                                            <ul className='card-tags'>
                                                <li>Urban</li>
                                                <li>Pollution</li>
                                            </ul>
                                            <h3>Shidhulai Sanivar Sangstha</h3>
                                            <div className='infos'>
                                                <p>OPERATES IN <span>DHAKA</span></p><p>BASED IN <span>BANGLADESH</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </a >
                            )
                        })
                    }

                </div>
            </div>
        </header>
    );
}

export default Header;
