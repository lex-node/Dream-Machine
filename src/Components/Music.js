import React from 'react';
import soundfile from "../Images/(Disc 2) 08 - Darkness Begins (The Soundtrack Album).mp3"
import Sound from 'react-sound';

const Music = props => {
    return (
        <Sound
            url={soundfile}
            playStatus={Sound.status.PLAYING}
            onLoading={props.handleSongLoading}
            onPlaying={props.handleSongPlaying}
            onFinishedPlaying={props.repeat}
            autoLoad={true}
            loop={true}
        />
    )
}

export default Music;