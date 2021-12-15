import React from 'react';

export default function Stats({ time, spm, wpm, setText }) {
    function onReload() {
        setText();

        const input = document.getElementsByClassName('TypingTester-Workplace-Input')[0];
        input.disabled = false;
        input.value = "";

        const block = document.getElementsByClassName("TypingTester-Stats")[0];
        block.classList.add("hidden");
    };

    return (
        <div className="TypingTester-Stats hidden">
            <div className="TypingTester-Stats-Content">
                <p className="TypingTester-Stats-Content-Span">Time: {time} s.</p>
                <p className="TypingTester-Stats-Content-Span">Spm: {spm}</p>
                <p className="TypingTester-Stats-Content-Span">Wpm: {wpm}</p>
                <button onClick={onReload} className="TypingTester-Stats-Content-Button">OK</button>
            </div>
        </div>
    );
}