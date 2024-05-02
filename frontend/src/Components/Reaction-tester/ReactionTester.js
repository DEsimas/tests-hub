import './ReactionTester.scss';

import React from "react";

export default function ReactionTester() {
    let status = "ready" // ready, running, active, clicked
    let begin, end;

    function start() {
        if (status != "ready") return;

        status = "running";
        document.getElementsByClassName("begin")[0].classList.add("hidden");
        document.getElementsByClassName("check")[0].classList.remove("hidden");

        let delay = (Math.random() * 3000) + 2000; // delay is in range [2; 5) seconds
        setTimeout(activate, delay);
    }

    function activate() {
        if (status != "running") return;

        status = "active";
        document.getElementsByClassName("check")[0].classList.add("red");
        begin = new Date();
    }

    function clicked() {
        if (status == "running") {
            //clicked too early
            status = "clicked";
            showTooLateMsg();
        } else if (status == "active") {
            //clicked in time
            status = "clicked";
            end = new Date();
            showStats();
        }
    }

    function showStats() {
        document.getElementsByClassName("ReactionTester-ResultWindow")[0].classList.remove("hidden");
        document.getElementsByClassName("ReactionTester-ResultWindow-InfoWindow-Text")[0].innerHTML = `Your reaction is ${end - begin} ms`;
    }

    function showTooLateMsg() {
        document.getElementsByClassName("ReactionTester-ResultWindow")[0].classList.remove("hidden");
        document.getElementsByClassName("ReactionTester-ResultWindow-InfoWindow-Text")[0].innerHTML = "Too fast 😭. Try again";
    }

    function restart() {
        if (status != "clicked") return;

        status = "ready";
        end = undefined;
        begin = undefined;

        document.getElementsByClassName("ReactionTester-ResultWindow-InfoWindow-Text")[0].innerHTML = "";
        document.getElementsByClassName("ReactionTester-ResultWindow")[0].classList.add("hidden");

        document.getElementsByClassName("check")[0].classList.remove("red");

        document.getElementsByClassName("check")[0].classList.add("hidden");
        document.getElementsByClassName("begin")[0].classList.remove("hidden");
    }

    return (
        <div className="ReactionTester">
            <div className="ReactionTester-Buttons">
                <div className="ReactionTester-Buttons-Button begin unselectable" onClick={start}> Press here to start </div>
                <div className="ReactionTester-Buttons-Button check unselectable hidden" onClick={clicked}>Hit the button when the background turns red!</div>
            </div>
            <div className="ReactionTester-ResultWindow hidden">
                <div className="ReactionTester-ResultWindow-InfoWindow">
                    <span className="ReactionTester-ResultWindow-InfoWindow-Text"></span>
                    <button className="ReactionTester-ResultWindow-InfoWindow-Button" onClick={restart}>OK</button>
                </div>
            </div>
        </div>
    )
}