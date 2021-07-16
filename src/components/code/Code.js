/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useRef } from 'react'
import { SettingsContext } from '../../context/SettingsContext'
import './code.css'


const Code = (props) => {
    const editor = useRef(null);
    const { active } = useContext(SettingsContext);

    useEffect(() => {
       editor.current.innerText = props.value;
    }, [active])

    const changeHandler = () => {
        props.onChange(editor.current.innerText)
    }
    
    // syntax highlighting, line numbers, indentation, save code to localstorage, 
    return (
        <pre>
            <code>
                <div
                className='code'
                ref={editor}
                contentEditable='true'
                onKeyUp={changeHandler}
                >
                    <div></div>
                </div>
            </code>
        </pre>
    )
}

export default Code
