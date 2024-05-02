import { useEffect, useState } from 'react';
import React from "react";


import Text from './Text';
import Stats from './Stats';
import Examples from './Examples';
import MobileWarnign from './MobileWarning';

import './Text.scss';
import './TypingTester.scss';

const SERVER_URL = process.env.REACT_APP_SERVER_URL + '/TypingTester';
let inputLength = 0;

export default function TypingTester() {
    const [inputText, setInputText] = useState('');
    const [text, setText] = useState(new Text('React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications. However, React is only concerned with state management and rendering that state to the DOM, so creating React applications usually requires the use of additional libraries for routing, as well as certain client-side functionality.'));
    const [stats, setStats] = useState({});
    const [texts, setTexts] = useState([]);

    function onTextChanged(evt) {
        if (evt.target.value[evt.target.value.length - 1] === '\n') {
            evt.target.value = inputText;
            return;
        };

        if (evt.target.value.length > inputLength + 1) {
            evt.target.value = inputText;
            return;
        };

        inputLength = evt.target.value.length;

        text.addChar(evt.target.value);

        if (text.isCompleted) displayStats();

        setInputText(evt.target.value);
    };

    function onLoadClick(e) {
        e.preventDefault();

        const file = getFile();
        if (file) loadFile(file);
    };

    function getFile() {
        const input = document.getElementsByClassName('TypingTester-Workplace-Texts-LoadInput')[0];

        if (input.files[0] === undefined) {
            alert('Choose file with text');
            return null;
        };

        return input.files[0];
    };

    function loadFile(file) {
        const reader = new FileReader();
        reader.readAsText(file);

        reader.onload = res => {
            const text = res.target.result;

            if (text.length < 10) {
                alert('Text should be at least 10 characters long');
                return;
            };

            if ((text.match(/\n/g) || []).length) {
                alert("Text can't contain \'new line\' symbols");
                return;
            }

            if ((text.match(/\t/g) || []).length) {
                alert("Text can't contain tabs");
                return;
            }

            let oldTexts = texts;
            let order = 1;
            oldTexts.forEach(el => el.title.search('Custom text ') === -1 ? null : order++);
            oldTexts.push({ title: `Custom text ${order}`, text: text });

            setTexts(oldTexts);
            setText(new Text(text));

            const textarea = document.getElementsByClassName('TypingTester-Workplace-Texts-Input')[0];
            textarea.value = '';
        };
    };

    function displayStats() {
        const stats = text.getStats();

        const input = document.getElementsByClassName('TypingTester-Workplace-Texts-Input')[0];
        input.disabled = true;

        const block = document.getElementsByClassName('TypingTester-Workplace-Stats')[0];
        block.classList.remove('hidden');
        setStats(stats);
    };

    function changeText(text) {
        const textarea = document.getElementsByClassName('TypingTester-Workplace-Texts-Input')[0];
        textarea.value = '';

        setText(new Text(text));
    }

    function updText() {
        setText(new Text(text.text));
    }

    useEffect(() => {
        async function fetchData() {
            const data = await fetch(SERVER_URL);
            if (data.status == 200) {
                const texts = await data.json();
                setTexts(texts.texts);
            }
        }
        fetchData();
    }, []);

    return (
        <div className='TypingTester'>
            <MobileWarnign />
            <Stats time={stats.time} wpm={stats.wpm} spm={stats.spm} setText={updText} />
            <div className='TypingTester-Workplace'>
                <div className='TypingTester-Workplace-Texts'>
                    {text.getJsx()}
                    <textarea className='TypingTester-Workplace-Texts-Input' onChange={onTextChanged} placeholder='Start typing here...' />
                    <button className='TypingTester-Workplace-Texts-LoadButton' onClick={onLoadClick} >Load text</button>
                    <input className='TypingTester-Workplace-Texts-LoadInput' accept='.txt' type='file'></input>
                </div>
                <Examples texts={texts} changeText={changeText} />
            </div>
        </div>
    );
}