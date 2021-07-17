import React, { useEffect, useState } from 'react'
import code from '../assets/code.png'

const SettingsContext = React.createContext()

const SettingsProvider = ({ children }) => {
    const [expand,setExpand] = useState(false);
    const [active,setActive] = useState({id: 'welcome', url:code, text:'Welcome' });
    const [shares,setShares] = useState(localStorage.getItem('shares')?localStorage.getItem('shares'):10);

    useEffect(() => {
        setInterval(() => {
            localStorage.removeItem('shares');
        },1000 * 60 * 60 * 24 );
    }, [])

    
    return (
        <SettingsContext.Provider value={{ expand, active, shares, setShares, setActive, setExpand }}>
            {children}
        </SettingsContext.Provider>
    )
}

export { SettingsContext, SettingsProvider } 