import React, { useEffect, useState } from 'react'
import stringSpliter from '../components/functions/StringSpliter'
import axios from 'axios'

const LangContext = React.createContext()

const LangProvider = ({ children }) => {
   const [html,setHtml] = useState(localStorage.getItem('dyte-html')?localStorage.getItem('dyte-html'):
   `<h1>Hello World</h1>`);
   const [css, setCss] = useState(localStorage.getItem('dyte-css')?localStorage.getItem('dyte-css'):`html, body{
    margin:1vh;
    padding:0;
}`);
   const [js,setJs] = useState(localStorage.getItem('dyte-js')?localStorage.getItem('dyte-js'):'');


   useEffect(() => {
       let id = window.location.href;
       id = id.replace('https://ishita1805.github.io/Dyte-React-Task/','');
       if(id !== '') {
        axios.get('https://cors-remove.herokuapp.com/getraw', {
            params: {
                data: id,
            }
        })
        .then((resp) => {
            console.log(resp.data);
            const arr = stringSpliter(resp.data);
            console.log(arr);
            setHtml(`${arr[0]}`);
            setCss(arr[1]);
            setJs(arr[2]);
        })
        .catch((e) => console.log(e));
       }
    }, [])

    return (
        <LangContext.Provider value={{ html, css, js, setHtml, setCss, setJs }}>
            {children}
        </LangContext.Provider>
    )
}

export { LangContext, LangProvider } 