import React,{useState, useContext} from 'react'
import './options.css'
import data from '../../data/options'
import {SettingsContext} from '../../context/SettingsContext'
import {LangContext} from '../../context/LanguagesContext'
import Popup from '../popup/Popup'
import code from '../../assets/code.png'
import axios from 'axios'


const Options = () => {
    const { setActive, expand, shares, setShares } = useContext(SettingsContext);
    const { html, css, js, setHtml, setCss, setJs } = useContext(LangContext);
    const [popup,setPopup] = useState(false);
    const [id,setId] = useState('to be done');

    const linkGenerator = () => { 
        if(shares > 0) {
            const src = `
            <head>
                <title>Dyte frontend task</title>
            <head>
            ${html}
            <style>${css}</style>
            <script>${js}</script>`

            //using reverse proxy to avoid cors
            axios.get('https://cors-remove.herokuapp.com/',{
                params: {
                data: src
                }
            })
            .then((resp) => {
                setId(resp.data);
                setPopup(true);
                setShares(shares-1);
                localStorage.setItem('shares',shares-1);
            })
            .catch((e) => console.log(e));
        } else {
            setId('Limit exceeded');
            setPopup(true);
        }
    }

    const clearData = () => {
        localStorage.removeItem("dyte-html");
        localStorage.removeItem("dyte-css");
        localStorage.removeItem("dyte-js");
        setHtml('');
        setCss('');
        setJs('');
        setActive({ id:'welcome', url:code, text:'Welcome' })
    }

    const functionSwitch = (id) => {
        switch(id){
            case 'deploy':
                linkGenerator();
                break;
            case 'clear':
                clearData();
                break;
            default:
                break;
        }
    }

    return (
        <div className='op-container'>
            {/* popup */}
            {
                popup?
                <Popup id={id} close={()=>setPopup(false)}/>:
                null
            }
            {/* header */}
            {!expand?
            <span className='op-header'>Actions</span>:
            <span className="material-icons-outlined op-header">
                settings
            </span>}
            {/* content */}
            {
                data.map((item) => (
                    <div key={item.id} className='op-actions' onClick={()=>functionSwitch(item.id)}>
                        <img className={!expand?'icon':'icon-closed'} alt={item.id} src={item.url}/>
                        {!expand?item.text:null} 
                    </div>
                ))
            }
        </div>
    )
}

export default Options
