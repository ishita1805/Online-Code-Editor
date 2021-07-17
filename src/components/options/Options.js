import React,{useState, useContext} from 'react'
import './options.css'
import data from '../../data/options'
import {SettingsContext} from '../../context/SettingsContext'
import Popup from '../popup/Popup'

const Options = () => {
    const { expand } = useContext(SettingsContext);
    const [popup,setPopup] = useState(false);
    const [id,setId] = useState('to be done');

    const linkGenerator = async () => {  
        // const requestOptions = {
        //     mode: 'no-cors',
        //     method: 'post',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: {
        //         'api_dev_key ':'ToZZRZRjzGrf_WgfpfZkh9_GhhZXpxgv',
        //         'api_option ':'paste',
        //         'api_paste_code ':'this is a test',
        //         'api_paste_expire_date ':'N'
        //     }
        // };
        // fetch('https://pastebin.com/api/api_post.php',requestOptions)
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch((e) => console.log(e))
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
