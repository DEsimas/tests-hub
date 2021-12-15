import React from 'react';

export default function Examples({ texts, changeText }) {
    function show() {
        document.getElementsByClassName('TypingTester-Examples-ButtonShow')[0].classList.add('hidden');
        document.getElementsByClassName('TypingTester-Examples-List')[0].classList.remove('hidden');
        document.getElementsByClassName('TypingTester-Examples-ButtonHide')[0].classList.remove('hidden');
    }

    function hide() {
        document.getElementsByClassName('TypingTester-Examples-ButtonShow')[0].classList.remove('hidden');
        document.getElementsByClassName('TypingTester-Examples-List')[0].classList.add('hidden');
        document.getElementsByClassName('TypingTester-Examples-ButtonHide')[0].classList.add('hidden');
    }

    return (
        <div className='TypingTester-Examples'>
            <button className='TypingTester-Examples-ButtonShow' onClick={show}> Show texts </button>
            <button className='TypingTester-Examples-ButtonHide hidden' onClick={hide}> Hide texts </button>
            <div className='TypingTester-Examples-List hidden' id='list'>
                {texts?.length ? texts.map(el => (<button key={el.title} onClick={() => changeText(el.text)} className={el.title + ' example'}>{el.title}</button>)) : ''}
            </div>
        </div>
    );
}