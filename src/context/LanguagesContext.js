import React, { useState } from 'react'

const LangContext = React.createContext()

const LangProvider = ({ children }) => {
   const [html,setHtml] = useState(localStorage.getItem('dyte-html')?localStorage.getItem('dyte-html'):`<!DOCTYPE html>
   <html>
       <head>
           <title>Demo document</title>
       </head>
       <body>
       
       </body>
   </html>`);
   const [css, setCss] = useState(localStorage.getItem('dyte-css')?localStorage.getItem('dyte-css'):`html, body{
    margin:0;
    padding:0;
}`);
   const [js,setJs] = useState(localStorage.getItem('dyte-js')?localStorage.getItem('dyte-js'):'');
    return (
        <LangContext.Provider value={{ html, css, js, setHtml, setCss, setJs }}>
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProvider } 