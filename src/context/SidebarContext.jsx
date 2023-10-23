import { createContext, useState } from "react";

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
    const [sidebarActive, setSidebarActive] = useState(false);

    const toggleSidebar = () => {
        setSidebarActive((prev) => !prev);
        console.log("Called toggle side bar");
    };

    return (
        <SidebarContext.Provider
            value={{ sidebarActive, toggleSidebar, setSidebarActive }}>
            {children}
        </SidebarContext.Provider>
    );
}

export default SidebarContext;
