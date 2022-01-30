import { useState } from "react"

export default function TextareaDiv(props) 
{

    const [inTextArea , changeInTextArea] = useState('');

    const getChange = (element) =>{
        changeInTextArea(element.target.value)
    }



    
    return (
        <div id="textDiv" >
            <span className="subHeadings">
                Start writing and timer will start automatically !
            </span>
            <textarea id="userinput" value={inTextArea}   onChange={getChange} ></textarea>
        </div>
    )
}