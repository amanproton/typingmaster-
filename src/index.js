import react from 'react'
import reactDom from 'react-dom'

import Para from './components/Para'
import TextareaDiv from './components/TextareaDiv'
import checkData from './components/checkData'
import Result from './components/Result'


import './style.css'


const getMyData = (id, data , second) => {
    let values = checkData(id, data , second);
    document.getElementById('container').style.display = "none";
    document.getElementById('container2').style.display = "flex";
    reactDom.render(
        <>
        
            
            <Result correct={values.correct} incorrect={values.wrong} wordsperminute={values.wordsPerMinute} ></Result>
        </>,
        document.getElementById('container2')
    );
}






let timeStarted = false;
let second = 0;
let ID = 0;
function startTime() {
        if(!timeStarted)
        {
            let time = "";
            ID = setInterval(()=>{
                second += 1;

                time = parseInt(second%60);
                document.getElementById('timer').innerHTML = time;
            } , 1000)

            timeStarted = true;
        }
}



function launch() {
    reactDom.render(
        <>
            <div id='heading'>Typing Master</div>
            <div id='container2' style={{"display" : "none"}}></div>
            <div id='container'>

                <div>

                    <span className="subHeadings">
                        Text you have to write:-
                    </span>

                    <Para />
                    <TextareaDiv func={getMyData} />


                </div>

                <div id="timer">00:00</div>
                <button id="submit" onClick={() => { getMyData('userinput', 'data' , second); }}>Submit !</button>

            </div>
        </>,
        document.getElementById('root')
    );

    document.getElementById('userinput').addEventListener('input', startTime);
}

launch();


