import { createContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [sidebarState, setSidebarState] = useState({
        active: false,
        currentTab: 'stories'
    })

    const setSidebarActive = () => {
        setSidebarState({
            active: true,
            currentTab: sidebarState['currentTab']
        })
    };

    const toggleSidebar = () => {
        setSidebarState({
            active: !sidebarState['active'],
            currentTab: sidebarState['currentTab']
        });
    };

    const changeSidebarTab = (selectedTab) => {
        setSidebarState({
            active: sidebarState['active'],
            currentTab: selectedTab
        })
        console.log(selectedTab, '<--- CURRENTLY SELECTED TAB')
    };


    return (
        <SidebarContext.Provider
            value={{ sidebarState, toggleSidebar, setSidebarActive, changeSidebarTab, setSidebarState }}>
            {children}
        </SidebarContext.Provider>
    );
}

export default SidebarContext;
