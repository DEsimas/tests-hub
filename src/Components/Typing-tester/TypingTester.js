import React from 'react';
import Loading from './../Loading/Loading';

import loading from './../../Assets/TypingTester/loading.gif';

import './TypingTester.scss';

export default function TypingTester() {

    return (
        <div className="TypingTester">
            <Loading loading={loading}/>
        </div>
    )
}