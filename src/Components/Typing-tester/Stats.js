import React from 'react';

import './Stats.scss';

export default function Stats({ time, spm, wpm, setText }) {
    function onReload() {
        setText();

        const input = document.getElementsByClassName('TypingTester-Workplace-Texts-Input')[0];
        input.disabled = false;
        input.value = "";

        const block = document.getElementsByClassName("TypingTester-Workplace-Stats")[0];
        block.classList.add("hidden");
    };

    return (
        <div className="TypingTester-Workplace-Stats hidden">
            <div className="TypingTester-Workplace-Stats-Content">
                <p className="TypingTester-Workplace-Stats-Content-Span">Time: {time} s.</p>
                <p className="TypingTester-Workplace-Stats-Content-Span">Spm: {spm}</p>
                <p className="TypingTester-Workplace-Stats-Content-Span">Wpm: {wpm}</p>
                <button onClick={onReload} className="TypingTester-Workplace-Stats-Content-Button">OK</button>
            </div>
        </div>
    );
}