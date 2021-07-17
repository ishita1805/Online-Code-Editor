import React, { useContext } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import { LangContext } from '../../context/LanguagesContext'
import './editor.css'
import CodeEditor from "@monaco-editor/react";
import github from '../../assets/github.png'
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
                        onChange={(data)=>{setHtml(data);localStorage.setItem('dyte-html', data)}}
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
                        onChange={(data)=>{setJs(data);localStorage.setItem('dyte-js', data)}}
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
                        onChange={(data)=>{setCss(data);localStorage.setItem('dyte-css', data)}}
                        options={{
                            minimap: {
                                enabled: false,
                            },
                        }}
                    /> : null
                }
                {
                    active.id === 'welcome'?
                    <div className='welcome-box'>
                        <h1>Hey There!👋</h1>
                        <h3>Using this code editor:</h3>
                        <ul>
                            <li>Use the bottom right corner to resize the code editor window</li>
                            <li>Share code generate a pastebin link of your code! (limit: 10 times per IP)</li>
                            <li>Code is auto saved, hit the clear code button to remove saved code</li>
                        </ul>
                        <p><b>Select a file from the explorer to start coding</b></p>
                        <a href='https://github.com/ishita1805/Dyte-React-Task' target='__blank'><img alt='github' src={github} className='icon'/></a>
                    </div> : null
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
