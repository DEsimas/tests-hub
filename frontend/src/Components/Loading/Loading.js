import React from 'react';

import './Loading.scss';

export default function Loading(props) {

    return (
        <div className="Loading">
            <img className="Loading-Image" src={props.loading} alt="Loading..."/>
        </div>
    );
}