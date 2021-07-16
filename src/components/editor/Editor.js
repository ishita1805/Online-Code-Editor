import React, { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import { LangContext } from '../../context/LanguagesContext'
import './editor.css'
import CodeEditor from "@monaco-editor/react";
// import Code from '../code/Code'

const Editor = () => {
    const { active } = useContext(SettingsContext);
    const {html, css, js, setHtml, setCss, setJs} = useContext(LangContext);

    const setActive = (data) => {
        if(active.id === 'html') setHtml(data);
        if(active.id === 'css') setCss(data);
        if(active.id === 'javascript') setJs(data);
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
                <CodeEditor
                    height="90vh"
                    theme="vs-dark"
                    defaultLanguage={active.id}
                    defaultValue={active.id==='html'?html:(active.id==='css'?css:js)}
                    onChange={(data)=>setActive(data)}
                    options={{
                        minimap: {
                            enabled: false,
                        },
                    }}
                />
                <p>Built by Ishita Kabra, 18BIS0108</p>

                {/*custom code component with line number, syntax highliting doesn't work */}
                {/* <Code
                value={active.id==='html'?html:(active.id==='css'?css:js)}
                onChange={(data)=>dataSet(data)}/> */}
            </div>
        </div>
    )
}

export default Editor
