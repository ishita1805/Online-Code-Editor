import React,{useState, useContext} from 'react'
import './options.css'
import data from '../../data/options'
import {SettingsContext} from '../../context/SettingsContext'
import Popup from '../popup/Popup'

const Options = () => {
    const { expand } = useContext(SettingsContext);
    const [popup,setPopup] = useState(false);
    const [id,setId] = useState('to be done');

    const linkGenerator = () => {  
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var urlencoded = new URLSearchParams();
        urlencoded.append("api_dev_key", "X6Vj9HxApaytHqclsPPJAx-CBw8JOah-");
        urlencoded.append("api_paste_code", "Help me");
        urlencoded.append("api_option", "paste");
        urlencoded.append("api_paste_private", 0);
        urlencoded.append("api_paste_expire_date", "10M");
        
        var requestOptions = {
        method: 'POST',
        mode:'no-cors',
        headers: myHeaders,
        body: urlencoded,
        };

        fetch("https://pastebin.com/api/api_post.php", requestOptions)
        .then(response => console.log(response))
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    
        setId("updated");
        setPopup(true);
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
            <span class="material-icons-outlined op-header">
                settings
            </span>}
            {/* content */}
            {
                data.map((item) => (
                    <div className='op-actions' onClick={linkGenerator}>
                        <img className={!expand?'icon':'icon-closed'} alt={item.id} src={item.url}/>
                        {!expand?item.text:null} 
                    </div>
                ))
            }
        </div>
    )
}

export default Options
