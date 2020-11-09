const { useState, useEffect, useRef } = React;

// useKeyHook
// function useKey(key, callBack) {
// 	const callbackRef = useRef(callBack);

// 	useEffect(() => {
// 		callbackRef.current = callBack;
// 	});

// 	useEffect(() => {
// 		function handle(event) {
// 			if (event.key.toLowerCase() === key.toLowerCase()) {
// 				callbackRef.current(event);
// 			}
// 		}
// 		document.addEventListener("keypress", handle);
// 		return () => document.removeEventListener("keypress", handle);
// 	}, [key]);
// }

const App = (props) => {
    const [display, setDisplay] = useState("Beat name");
    const [volume, setVolume] = useState(100);

    const handleVolume = (event) => {
        setVolume(event.target.value);
    };

    return (
        <div className="App">
            <div id="drum-machine" className="App-drum-machine">
                <div className="App-pads-pannel">
                    <Pad
                        padId="Heater-1"
                        text="Q"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Heater-2"
                        text="W"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Heater-3"
                        text="E"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Heater-4"
                        text="A"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Clap"
                        text="S"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Open-HH"
                        text="D"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Kick-n'-Hat"
                        text="Z"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Kick"
                        text="X"
                        url="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                    <Pad
                        padId="Closed-HH"
                        text="C"
                        url="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
                        setDisplay={setDisplay}
                        volume={volume}
                    />
                </div>
                <div className="App-controls-pannel">
                    <div id="display" className="App-controls-display">
                        {display}
                    </div>
                    <div className="App-volume-control-container">
                        <input
                            className="App-volume-control"
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={handleVolume}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const Pad = (props) => {
    const { padId, text, url, setDisplay, volume } = props;
    const audioRef = useRef(null);

    const handlePlay = () => {
        // The volume has bar accepts values 0 to 100 but the audio API goes from 0 to 1
        // This is the reason for the division by 100
        audioRef.current.volume = volume / 100;
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
            playPromise
                .then((_) => {
                    // Automatic playback started!
                })
                .catch((error) => {
                    // Auto-play was prevented
                    console.log("ERROR: ", error);
                });
        }
        setDisplay(padId); // If this is uncommented, test #7 passes
    };

    const onKeyup = (event) => {
        if (event.key.toLowerCase() === text.toLowerCase()) {
            // ALWAYS equate both strings to the same case!
            handlePlay();
        }
    };
    useEffect(() => {
        document.addEventListener("keyup", onKeyup);
        return () => {
            document.removeEventListener("keyup", onKeyup);
        };
        // This must be updated on every volume change
    }, [volume]);

    // useKey(text, handlePlay); hooks version

    return (
        <div onClick={handlePlay} className="drum-pad" id={padId}>
            {text}
            <audio className="clip" id={text} ref={audioRef} src={url}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
        </div>
    );
};

// ======================

ReactDOM.render(<App />, document.getElementById("root"));
