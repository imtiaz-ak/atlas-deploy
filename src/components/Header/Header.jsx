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
            <div className="search-result" style={searchBarOpen ? { height: "1000vh", visibility: "visible", opacity: "1" } : {}}>
                <button
                    tabIndex="-1"
                    className="close-sidebar"
                    style={{ position: 'absolute', right: '40px', top: '20px', display: 'block' }}
                    onClick={() => { setSearchBarOpen(false) }}
                >
                    +
                </button>
                <h4>Stories </h4>
                <div className="result-section">

                    {
                        searchResult?.impact?.map((e) => {
                            return (
                                <a href={e.url} target="_blank" style={{ height: '100%' }}>
                                    <div className='custom-card' style={{ height: '97%' }}>
                                        <div className='card-img'>
                                            <img src={e.image} />
                                        </div>
                                        <div className='card-body' style={{ height: '100%' }}>
                                            <span>Impact</span>
                                            <h2>{e.title}</h2>
                                            <ul className='card-tags'>
                                                {
                                                    e.tags.map((e) => {
                                                        return (
                                                            <li>{e}</li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </a >
                            )
                        })
                    }


                </div>
                <h4>Resilience Stories</h4>
                <div className="result-section">
                    {
                        searchResult?.resilience?.map((e) => {
                            return (
                                <div style={{ height: '100%' }}>

                                    <a href={e.url} target="_blank" style={{ height: '100%' }}>
                                        <div className='custom-card' style={{ height: '97%' }}>
                                            <div className='card-img'>
                                                <img src={e.image} />
                                            </div>
                                            <div className='card-body' style={{ height: '100%' }}>
                                                <span>Resilience</span>
                                                <h2>{e.title}</h2>
                                                {
                                                    e.tags.map((e) => {
                                                        return (
                                                            <li>{e}</li>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </a >
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </header>
    );
}

export default Header;
