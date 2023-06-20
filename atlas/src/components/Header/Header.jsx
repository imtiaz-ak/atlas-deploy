import React from "react";
import logo from "../../assets/logo.svg";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__left">
                    <div className="header__left__logo">
                        <img
                            src={logo}
                            alt="stories of change logo"
                            className="logo"
                        />
                    </div>
                    <div className="vertical-divider"></div>
                    <div className="header__left__name">
                        <span>Climate Atlas</span>
                    </div>
                </div>
                <div className="header__center">
                    <div>
                        <button className="btn menu-btn">
                            <div className="hamburger">
                                <div className="hamburger__line"></div>
                                <div className="hamburger__line"></div>
                                <div className="hamburger__line"></div>
                            </div>
                            <span>Menu</span>
                        </button>
                    </div>
                    <div className="searchbar-container">
                        <div className="magnifying-glass-icon">
                            <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M6.40723 10C4.19823 10 2.40723 8.209 2.40723 6C2.40723 3.791 4.19823 2 6.40723 2C8.61623 2 10.4072 3.791 10.4072 6C10.4072 8.209 8.61623 10 6.40723 10ZM16.1142 14.293L11.2942 9.473C11.9922 8.492 12.4072 7.296 12.4072 6C12.4072 2.687 9.72023 0 6.40723 0C3.09423 0 0.407227 2.687 0.407227 6C0.407227 9.313 3.09423 12 6.40723 12C7.70323 12 8.89923 11.585 9.88023 10.887L14.7002 15.707C14.8952 15.902 15.1512 16 15.4072 16C15.6632 16 15.9192 15.902 16.1142 15.707C16.5052 15.316 16.5052 14.684 16.1142 14.293Z"
                                    fill="#5C5F62"
                                />
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Search stories, organizations and more"
                            className="searchbar"
                        />
                    </div>
                </div>
                <div className="header__right"></div>
            </div>
        </header>
    );
}

export default Header;
