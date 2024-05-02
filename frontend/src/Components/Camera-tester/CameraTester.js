import React, { useEffect, useRef } from 'react';

import './CameraTester.scss'

export default function CameraTester() {
    if (!navigator.mediaDevices) return <div className='CameraTester-Warning'>Camera access error</div>
    const videoRef = useRef(null);
    let VideoStream;

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 1920,
                height: 1080
            }
        }).then((stream) => {
            VideoStream = stream;
            let video = videoRef.current;
            video.srcObject = stream;
            video.play();
        }).catch((err) => {
            //don't care
        });
    }

    getVideo();

    useEffect(() => {
        return () => {
            VideoStream?.getTracks().forEach(function (track) {
                track.stop();
            });
        }
    });

    return (
        <div className="CameraTester">
            <video className="CameraTester-Video" ref={videoRef}></video>
        </div>
    );
}