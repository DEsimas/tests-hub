import { useRef } from 'react';

import './CameraTester.scss'

export default function CameraTester() {
    const videoRef = useRef(null);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: {
                width: 1920,
                height: 1080
            }
        })
            .then((stream) => {
                let video = videoRef.current;
                video.srcObject = stream;
                video.play();
            }).catch((err) => {

            });
    }

    getVideo();

    return (
        <div className="CameraTester">
            <video className="CameraTester-Video" ref={videoRef}></video>
        </div>
    );
}