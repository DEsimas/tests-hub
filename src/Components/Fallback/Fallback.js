import { Link } from "react-router-dom/cjs/react-router-dom.min";

import arrowBack from './../../Assets/Fallback/back.png';

import './Fallback.scss';

export default function Fallback() {

    return (
        <Link className='Fallback' to='/'>
            <img className='Fallback-Image' src={arrowBack} alt="" />
            Home
        </Link>
    )
}