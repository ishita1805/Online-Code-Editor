import React,{ useState } from 'react'
import './popup.css'

const Popup = (props) => {
    const[active,setActive] = useState(false);
    
    const copy = () => {
        setActive(!active);
        navigator.clipboard.writeText(props.id);
    }
    const close = () => {
        props.close(true);
    }

    return (
        <div className='popup'>
            <div className='popup-container'>
                <div className='popup-text'>{props.id}</div>
                <span 
                className={!active?"material-icons-outlined":"material-icons-outlined active"} 
                onClick={copy}>
                    integration_instructions
                </span>
                <span 
                className="material-icons-outlined"
                onClick={close}>close</span>
            </div>
        </div>
    )
}

export default Popup
