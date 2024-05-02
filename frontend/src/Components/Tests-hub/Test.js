import React from 'react';
import { Link } from 'react-router-dom';

export default function Test(props) {
    const { name, description, to, thumbnail } = props;

    function showFallback() {
        document.getElementsByClassName("Fallback")[0]?.classList.remove("hidden");
    }

    return (
        <Link key={name} className='TestsHub-List-Test' to={to} onClick={showFallback}>
            <img className='TestsHub-List-Test-Image' src={thumbnail} />
            <h3 className='TestsHub-List-Test-Header'>{name}</h3>
            <p className='TestsHub-List-Test-Description'>{description}</p>
        </Link>
    )
}