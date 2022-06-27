import { useEffect } from "react";

import './ReactionTester.scss';

export default function ReactionTester() {
    let status = "ready" // ready, running, active, clicked
    let begin, end;

    function start() {
        if(status != "ready") return;

        status = "running";
        document.getElementsByClassName("begin")[0].classList.add("hidden");
        document.getElementsByClassName("check")[0].classList.remove("hidden");
    }

    function activate() {
        if(status != "running") return;

        status = "active";
        document.getElementsByClassName("check")[0].classList.add("red");
        begin = (new Date()).getMilliseconds();
    }
    
    return (
        <div className="ReactionTester">
            <div className="ReactionTester-Buttons">
                <div className="ReactionTester-Buttons-Button begin unselectable" onClick={start}> Press here to start </div>
                <div className="ReactionTester-Buttons-Button check unselectable hidden" onClick={()=>{}}>Hit the button when the background turns red!</div>
            </div>
            <div className="ReactionTester-ResultWindow hidden">
                <div className="ReactionTester-ResultWindow-InfoWindow">
                    <span className="ReactionTester-ResultWindow-InfoWindow-Text"></span>
                    <button className="ReactionTester-ResultWindow-InfoWindow-Button" onClick={()=>{}}>OK</button>
                </div>
            </div>
        </div>
    )
}