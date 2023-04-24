import React, { useEffect, useState } from 'react';
import Loading from './../Loading/Loading';
import Word from './Word';
import loading from './../../Assets/AccentTester/loading.gif';
import bg from './../../Assets/AccentTester/bg.jpg'

import './AccentTester.scss';

const SERVER_URL = process.env.REACT_APP_SERVER_URL + '/AccentTester/';

export default function AccentTester() {
    const [word, setWord] = useState(undefined);
    const [counter, setCounter] = useState(0);
    const [set, setSet] = useState();
    const [sets, setSets] = useState([]);

    function decrypt(data) {
        const key = process.env.REACT_APP_ACCENT_TESTER_KEY;
        const iv = data.iv;
        const content = data.content;
        return [{ word: 'тЕст' }, { word: 'привЕт' }, { word: 'мИр' }];
    }

    useEffect(() => {
        fetch(SERVER_URL + 'Collections')
            .then(data => data.json())
            .then(s => setSets(s));
    }, [])

    useEffect(() => {
        setSet(sets.at(0));
    }, [sets])

    useEffect(() => {
        if (set) {
            fetch(SERVER_URL + '?collection=' + set)
                .then(data => data.json())
                .then(dictionary =>
                    setWord(new Word(decrypt(dictionary), setCounter))
                )
        }
    }, [set]);

    if (!word) return <Loading loading={loading} />

    return (
        <div className='AccentTester' style={{ backgroundImage: `url(${bg})` }}>
            <h1 className="AccentTester-Header"> Тест на знание ударений </h1>
            {word.getJsx()}
            <div className='bottom'>
                <div className='AccentTester-Sets'>
                    {
                        sets.map(key => (
                            <button key={key} className={`AccentTester-Sets-Btn ${key === set ? 'active' : ''}`} onClick={(e) => { setSet(key) }}>{key}</button>
                        ))
                    }
                </div>
                <p className="AccentTester-Text">Поставьте звёздочку на <a target="_blank" href='https://github.com/DEsimas/tests-hub'>гитхабе</a> 🙏</p>
            </div>
        </div>
    );
}