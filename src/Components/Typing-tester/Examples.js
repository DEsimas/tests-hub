import React from 'react';

export default function Examples({ texts, changeText }) {
    function show() {
        document.getElementsByClassName('TypingTester-Workplace-Examples-ButtonShow')[0].classList.add('hidden');
        document.getElementsByClassName('TypingTester-Workplace-Examples-List')[0].classList.remove('hidden');
        document.getElementsByClassName('TypingTester-Workplace-Examples-ButtonHide')[0].classList.remove('hidden');
    }

    function hide() {
        document.getElementsByClassName('TypingTester-Workplace-Examples-ButtonShow')[0].classList.remove('hidden');
        document.getElementsByClassName('TypingTester-Workplace-Examples-List')[0].classList.add('hidden');
        document.getElementsByClassName('TypingTester-Workplace-Examples-ButtonHide')[0].classList.add('hidden');
    }

    return (
        <div className='TypingTester-Workplace-Examples'>
            <button className='TypingTester-Workplace-Examples-ButtonShow' onClick={show}> Show texts </button>
            <button className='TypingTester-Workplace-Examples-ButtonHide hidden' onClick={hide}> Hide texts </button>
            <div className='TypingTester-Workplace-Examples-List hidden' id='list'>
                {texts?.length ? texts.map(el => (<button key={el.title} onClick={() => changeText(el.text)} className={el.title + ' example'}>{el.title}</button>)) : ''}
            </div>
        </div>
    );
}