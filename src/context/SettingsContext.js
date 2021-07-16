import React, { useState } from 'react'
import data from '../data/explorer'

const SettingsContext = React.createContext()

const SettingsProvider = ({ children }) => {
    const [expand,setExpand] = useState(false);
    const [active,setActive] = useState(data[0].id);

    return (
        <SettingsContext.Provider value={{ expand, active, setActive, setExpand }}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingsContext, SettingsProvider } 