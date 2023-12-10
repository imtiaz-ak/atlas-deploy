import React from "react";
import Left from "./Left";
import Center from "./Center";
import Right from "./Right";
import info from "../../assets/info.svg";

function Header() {
    const searchbaropen = false;
    return (
        <header className="header">
            <div className="header__container">
                <Left />
                <Center />
                <Right />
            </div>
            <div className="search-result" style={searchbaropen ? { height: "608px", visibility: "visible", opacity: "1" } : {}}>
                <h4>Stories <img src={info} /></h4>
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
                </div>
                <h4>Impacts <img src={info} /></h4>
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
                </div>
            </div>
        </header>
    );
}

export default Header;
