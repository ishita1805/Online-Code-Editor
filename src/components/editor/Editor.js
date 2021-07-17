import React, { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import { LangContext } from '../../context/LanguagesContext'
import './editor.css'
import CodeEditor from "@monaco-editor/react";
// import Code from '../code/Code'

const Editor = () => {
    const { active } = useContext(SettingsContext);
    const {html, css, js, setHtml, setCss, setJs} = useContext(LangContext);
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
                {
                    active.id === 'html'?
                    <CodeEditor
                        height="90vh"
                        theme="vs-dark"
                        defaultLanguage='html'
                        defaultValue={html}
                        onChange={(data)=>setHtml(data)}
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                    /> : null
                }
                 {
                    active.id === 'javascript'?
                    <CodeEditor
                        height="90vh"
                        theme="vs-dark"
                        defaultLanguage='javascript'
                        defaultValue={js}
                        onChange={(data)=>setJs(data)}
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                    /> : null
                }
                 {
                    active.id === 'css'?
                    <CodeEditor
                        height="90vh"
                        theme="vs-dark"
                        defaultLanguage='css'
                        defaultValue={css}
                        onChange={(data)=>setCss(data)}
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                    /> : null
                }

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
