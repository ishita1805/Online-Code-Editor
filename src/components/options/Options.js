import React,{useContext} from 'react'
import './options.css'
import data from '../../data/options'
import {SettingsContext} from '../../context/SettingsContext'

const Options = () => {
    const { expand } = useContext(SettingsContext);

    return (
        <div className='op-container'>
            {/* header */}
            {!expand?
            <span className='op-header'>Actions</span>:
            <span class="material-icons-outlined op-header">
                settings
            </span>}
            {/* content */}
            {
                data.map((item) => (
                    <div className='op-actions'>
                        <img className={!expand?'icon':'icon-closed'} alt={item.id} src={item.url}/>
                        {!expand?item.text:null} 
                    </div>
                ))
            }
        </div>
    )
}

export default Options
