import { useEffect, useState } from "react";
import './App.css';

function App() {
  const [activeKey, setActiveKey] = useState('');
  useEffect(() => {
    document.addEventListener('keydown', (event) => {
      playSound(event.key.toUpperCase())
    })
  }, []);

    const drumPads = [
      {
        keyCode: 81, //corresponds to a key pad (each key letter on keyboard has a corresponding number)
        text: "Q",
        sound: "Heater 1",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
        
      },
      {
        keyCode: 87,
        text: "W",
        sound: "Heater 2",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
      },
      {
        keyCode: 69,
        text: "E",
        sound: "Heater 3",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
      },
      {
        keyCode: 65,
        text: "A",
        sound: "Heater 4",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
      },
      {
        keyCode: 83,
        text: "S",
        sound: "Clap",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
      },
      {
        keyCode: 68,
        text: "D",
        sound: "Open HH",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
      },
      {
        keyCode: 90,
        text: "Z",
        sound: "Kick n' Hat",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
      },
      {
        keyCode: 88,
        text: "X",
        sound: "Kick",
        src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
      },
      {
        keyCode: 67,
        text: "C",
        sound: "Closed HH",
        src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
      }
    ];

    function playSound(selector) {
      const audio = document.getElementById(selector);
      console.log(audio);
      audio.play();
      setActiveKey(selector);
    };

  return (
    <div className="App">
      <div id="drum-machine">
        <div className='drum'>
          <div id="display">{activeKey}</div>
          <div className="drum-pads">
            {drumPads.map((drumPad) => 
              <div 
                key={drumPad.src}
                onClick={() => {
                  playSound(drumPad.text)
                  }} 
                className='drum-pad' id={drumPad.sound}>
                {drumPad.text}
            <audio
              className='clip'
              id={drumPad.text}
              src={drumPad.src}></audio>
            </div>)}
          </div>
         </div>  
        </div>
    </div>
  );
}

export default App;
