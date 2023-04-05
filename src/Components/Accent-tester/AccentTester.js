import { useEffect, useState } from 'react';
import crypto from 'crypto';

import Loading from './../Loading/Loading';
import Word from './Word';

import loading from './../../Assets/AccentTester/loading.gif';

import './AccentTester.scss';
import LoadingFail from './LoadingFail';
import Dictionaries from './Dictionaries';

const SERVER_URL = process.env.REACT_APP_SERVER_URL + '/AccentTester';

export default function AccentTester() {
    const [word, setWord] = useState(undefined);
    const [counter, setCounter] = useState(0);
    const [isFailed, setIsFailed] = useState(false);
    const [set, setSet] = useState('Бучарова3');

    function decrypt(data) {
        const key = process.env.REACT_APP_ACCENT_TESTER_KEY;
        const decipher = crypto.createDecipheriv('aes-256-ctr', key, Buffer(data.iv, 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(data.content, 'hex')), decipher.final()]);

        return JSON.parse(decrpyted.toString());
    }

    useEffect(async () => {
        const btns = document.getElementsByClassName('AccentTester-Sets-Btn');
        for (const btn of btns)
            if (btn.textContent == set) btn.classList.add('active');
            else btn.classList.remove('active');
        const data = JSON.parse(Dictionaries[set]);
        const dictionary = decrypt(data);
        setWord(new Word(dictionary, setCounter));
    }, [set]);

    if (isFailed) return <LoadingFail />
    if (!word) return <Loading loading={loading} />

    return (
        <div className='AccentTester'>
            <h1 className="AccentTester-Header"> Тест на знание ударений </h1>
            {word.getJsx()}
            <div className='bottom'>
                <div className='AccentTester-Sets'>
                    {
                        Object.keys(Dictionaries).map((key) => (
                            <button className={`AccentTester-Sets-Btn ${key === set ? 'active' : ''}`} onClick={(e) => { setSet(key) }}>{key}</button>
                        ))
                    }
                </div>
                <p className="AccentTester-Text">Поставьте звёздочку на <a target="_blank" href='https://github.com/DEsimas/tests-hub'>гитхабе</a> 🙏</p>
            </div>
        </div>
    );
}