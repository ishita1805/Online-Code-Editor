import React, { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import { LangContext } from '../../context/LanguagesContext'
import './editor.css'
import Code from '../code/Code'

const Editor = () => {
    const { active } = useContext(SettingsContext);
    const {html, css, js, setHtml, setCss, setJs} = useContext(LangContext);

    const  dataSet =  (data) => {
        if(active.id === 'html') setHtml(data);
        else if(active.id === 'css') setCss(data);
        else setJs(data);
    }

    return (
        <div className='ed-container'>
            {/* header */}
            <div className='ed-header'>
                <div className='ed-head-title'>
                    <img className='icon' alt={active.id} src={active.url} />
                    {active.text}
                </div>
            </div>
            {/* body of the editor */}
            <div className='ed-editor-body'>
                <Code
                value={active.id==='html'?html:(active.id==='css'?css:js)}
                onChange={(data)=>dataSet(data)}/>
            </div>
        </div>
    )
}

export default Editor
