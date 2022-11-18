import { useEffect, useState } from 'react';
import crypto from 'crypto';

import Loading from './../Loading/Loading';
import Word from './Word';

import loading from './../../Assets/AccentTester/loading.gif';

import './AccentTester.scss';
import LoadingFail from './LoadingFail';

const SERVER_URL = process.env.REACT_APP_SERVER_URL + '/AccentTester';

export default function AccentTester() {
    const [word, setWord] = useState(undefined);
    const [counter, setCounter] = useState(0);
    const [isFailed, setIsFailed] = useState(false)

    function decrypt(data) {
        const key = data.content.slice(-32);
        data.content = data.content.slice(0, -32);
        const decipher = crypto.createDecipheriv('aes-256-ctr', key, Buffer(data.iv, 'hex'));
        const decrpyted = Buffer.concat([decipher.update(Buffer.from(data.content, 'hex')), decipher.final()]);

        return JSON.parse(decrpyted.toString());
    }

    useEffect(async () => {
        const response = await fetch(SERVER_URL);
        console.log(response)
        if (response.status == 404) return setIsFailed(true)
        const data = await response.json();
        const dictionary = decrypt(data);
        setWord(new Word(dictionary, setCounter));
    }, []);

    if (isFailed) return <LoadingFail />
    if (!word) return <Loading loading={loading} />

    return (
        <div className='AccentTester'>
            <h1 className="AccentTester-Header"> Тест на знание ударений </h1>
            {word.getJsx()}
            <p className="AccentTester-Text">Основано на орфоэпическом словнике для ЕГЭ по Русскому языку 2022 год</p>
        </div>
    );
}