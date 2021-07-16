import React, { useState } from 'react'
import data from '../data/explorer'

const SettingsContext = React.createContext()

const SettingsProvider = ({ children }) => {
    const [expand,setExpand] = useState(false);
    const [active,setActive] = useState({
        id: data[0].id,
        url: data[0].url,
        text: data[0].text,
    });

    return (
        <SettingsContext.Provider value={{ expand, active, setActive, setExpand }}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingsContext, SettingsProvider } 