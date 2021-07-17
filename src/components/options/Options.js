import React,{useState, useContext} from 'react'
import './options.css'
import data from '../../data/options'
import {SettingsContext} from '../../context/SettingsContext'
import {LangContext} from '../../context/LanguagesContext'
import Popup from '../popup/Popup'
import code from '../../assets/code.png'


const Options = () => {
    const { setActive, expand } = useContext(SettingsContext);
    const { html, css, js, setHtml, setCss, setJs } = useContext(LangContext);
    const [popup,setPopup] = useState(false);
    const [id,setId] = useState('to be done');

    const linkGenerator = () => {  
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const src = `
        <head>
            <title>Dyte demo</title>
        <head>
        ${html}
        <style>${css}</style>
        <script>${js}</script>`

        var urlencoded = new URLSearchParams();
        urlencoded.append("api_dev_key", "X6Vj9HxApaytHqclsPPJAx-CBw8JOah-");
        urlencoded.append("api_paste_code", src);
        urlencoded.append("api_option", "paste");
        urlencoded.append("api_paste_private", 0);
        urlencoded.append("api_paste_expire_date", "10M");
        urlencoded.append("api_paste_format ","html");

        var requestOptions = {
        method: 'POST',
        mode:'no-cors',
        headers: myHeaders,
        body: urlencoded,
        };

        fetch("https://pastebin.com/api/api_post.php", requestOptions)
        .then(response => response.json())
        .then(result => {
            setId("https://pastebin.com/udAA28c4");
            setPopup(true);
        })
        .catch(error => console.log('error', error));
        
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
