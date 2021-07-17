import React, { useState } from 'react'
import code from '../assets/code.png'

const SettingsContext = React.createContext()

const SettingsProvider = ({ children }) => {
    const [expand,setExpand] = useState(false);
    const [active,setActive] = useState({id: 'welcome', url:code, text:'Welcome' });

    return (
        <SettingsContext.Provider value={{ expand, active, setActive, setExpand }}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingsContext, SettingsProvider } 