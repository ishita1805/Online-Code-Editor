import React, { useContext, useState } from 'react'
import axios from 'axios'
import stringSpliter from '../functions/StringSpliter';
import { LangContext } from '../../context/LanguagesContext'
import { SettingsContext } from '../../context/SettingsContext'
import image from '../../assets/html.png'
import url from '../../data/url';

const LinkPopUp = (props) => {
    const { setHtml, setCss, setJs } = useContext(LangContext);
    const { setActive } = useContext(SettingsContext);
    const [clicked, setClicked] = useState(false);
    const [raw, setRaw] = useState('');
    const urls = JSON.parse(localStorage.getItem('paste-urls') ? localStorage.getItem('paste-urls') : "[]");

    const getRaw = (id) => {
        const ID = id.toString().replace(`${url}/?id=`, '');
        axios.get('https://cors-remove.herokuapp.com/getraw', {
            params: {
                data: ID,
            }
        })
            .then((resp) => {
                setRaw(resp.data);
                setClicked(true);

            })
            .catch((e) => console.log(e));
    }

    const editCode = () => {
        const arr = stringSpliter(raw);
        setHtml(arr[0]);
        setCss(arr[1]);
        setJs(arr[2]);
        setActive({ id: 'html', text: 'index.html', url: image, })
        close();
    }

    const close = () => {
        props.close(true);
    }

    return (
        <div className='popup'>
        
            {
                urls.length > 0 ?
                    <div className='link-popup-container'>
                        <div>
                            <span className="material-icons-outlined close-popup" onClick={close}>close</span>
                            <div className='links-container'>
                                <div className='links'>
                                {
                                    urls.map((item) => (
                                        <div key={item} className='link-item' onClick={() => getRaw(item)}>{item}</div>
                                    ))
                                }
                                </div>
                                {clicked ? <button className='button-link' onClick={editCode}>Edit Code</button> : null}
                            </div>
                            
                        </div>
                        <iframe
                            sandbox='allow-scripts'
                            title='demo view'
                            srcDoc={raw}
                            className='view-demo' />
                            {/* <span>Edits will be made locally and not reflected on the current link</span> */}
                    </div>:
                    <div className='link-popup-container-small'>
                        <span>No links generated yet! 💔</span>&emsp;
                        <span className="material-icons-outlined close-popup-small" onClick={close}>close</span>
                    </div>
            }

        </div>
    )
}

export default LinkPopUp
