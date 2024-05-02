import { useEffect } from 'react';
import React from "react";

import tests from './Tests';
import Test from './Test';

import './TestsHub.scss';

export default function TestsHub() {

    useEffect(() => {
        document.getElementsByClassName("Fallback")[0]?.classList.add("hidden");
    })

    return (
        <div className="TestsHub">
            <h1 className="TestsHub-Header">Testing apps</h1>
            <div className='TestsHub-List'>
                {tests.map(el => (Test(el)))}
            </div>
        </div>
    );
}