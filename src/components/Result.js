export default function Result(props) {
    return (
        <div id="result">
            <div>Correct Words:- {props.correct}</div>
            <div>Incorrect Words:- {props.incorrect}</div>
            <div>Words per minute:- {props.wordsperminute}</div>
        </div>
    )
}