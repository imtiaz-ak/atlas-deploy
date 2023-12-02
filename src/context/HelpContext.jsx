import { createContext, useState } from "react";

const HelpContext = createContext();

export function HelpProvider({ children }) {
    const [helpState, setHelpState] = useState({
        active: false,
        helpText: '',
        helpTitle: ''
    })

    const setHelpModalActive = () => {
        setHelpState({
            active: true,
            helpText: helpState['helpText'],
            helpTitle: helpState['helpTitle']
        })
    }

    const toggleHelpModal = () => {
        setHelpState({
            active: !helpState['active'],
            helpText: helpState['helpText'],
            helpTitle: helpState['helpTitle']
        })
    }

    const changeHelpText = (text) => {
        setHelpState({
            active: helpState['active'],
            helpText: text,
            helpTitle: helpState['helpTitle']
        })
    }

    const changeHelpTitle = (title) => {
        setHelpState({
            active: helpState['active'],
            helpText: helpState['helpText'],
            helpTitle: title
        })
    }

    return (
        <HelpContext.Provider
            value={{ helpState, setHelpModalActive, toggleHelpModal, changeHelpText, changeHelpTitle, setHelpState }}>
            {children}
        </HelpContext.Provider>
    );

}

export default HelpContext;
