import React, { useState } from 'react'

const LangContext = React.createContext()

const LangProvider = ({ children }) => {
   const [html,setHtml] = useState('<h1>Hello World</h1>');
   const [css, setCss] = useState('h1{color:red;}');
   const [js,setJs] = useState('console.log("hello")');
    return (
        <LangContext.Provider value={{ html, css, js, setHtml, setCss, setJs }}>
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProvider } 