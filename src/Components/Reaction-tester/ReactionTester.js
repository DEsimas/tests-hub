import { useEffect } from "react";

import './ReactionTester.scss';

export default function ReactionTester() {
    let span, delay, begin, check, result, beginTime, reaction;

    function setDefaults() {
        reaction = undefined;
        beginTime = -1;
        delay = Math.floor(Math.random() * (5000 - 2000) + 2000);
        begin = document.getElementsByClassName("begin")[0];
        check = document.getElementsByClassName("check")[0];
        result = document.getElementsByClassName("ReactionTester-ResultWindow")[0];
        span = document.getElementsByClassName("ReactionTester-ResultWindow-InfoWindow-Text")[0];
        span.innerHTML = "Too fast. Try again";

        begin.classList.remove("hidden");
        check.classList.add("hidden");
        result.classList.add("hidden");
        check.classList.remove("red");
    }

    function setColor() {
        check.classList.add("red");
        beginTime = new Date();
    }

    function start() {
        begin.classList.add("hidden");
        check.classList.remove("hidden");
        setTimeout(setColor, delay);
    }

    function pressed() {
        if (beginTime !== -1) {
            console.log()
            span.innerHTML = `Your reaction is ${new Date() - beginTime} ms`;
        }
        result.classList.remove("hidden");
    }

    useEffect(setDefaults);
    
    return (
        <div className="ReactionTester">
            <div className="ReactionTester-Buttons">
                <div className="ReactionTester-Buttons-Button begin unselectable" onClick={start}> Press here to start </div>
                <div className="ReactionTester-Buttons-Button check unselectable hidden" onClick={pressed}>Hit the button when the background turns red!</div>
            </div>
            <div className="ReactionTester-ResultWindow hidden">
                <div className="ReactionTester-ResultWindow-InfoWindow">
                    <span className="ReactionTester-ResultWindow-InfoWindow-Text"></span>
                    <button className="ReactionTester-ResultWindow-InfoWindow-Button" onClick={setDefaults}>OK</button>
                </div>
            </div>
        </div>
    )
}