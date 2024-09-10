import React, { useState } from "react";
import birdChirp from "../assets/sounds/bird-chirp.mp3";
import doorbell from "../assets/sounds/doorbell.mp3";
import schoolBell from "../assets/sounds/school-bell.mp3";
import cashRegister from "../assets/sounds/cash-register.wav";

// Data for the sounds
const soundsData = [
  { name: "Bird Chirp", src: birdChirp },
  { name: "Doorbell", src: doorbell },
  { name: "School Bell", src: schoolBell },
  { name: "Cash Register", src: cashRegister },
];

function Place() {
  const [currentSound, setCurrentSound] = useState(null);
  const [attempts, setAttempts] = useState(0);
  const [message, setMessage] = useState("");
  const [gameStarted, setGameStarted] = useState(false);

  // Function to start the game with a random sound
  const startGame = () => {
    const randomSound =
      soundsData[Math.floor(Math.random() * soundsData.length)];
    setCurrentSound(randomSound);
    setGameStarted(true);
    setAttempts(0);
    setMessage("");
    playSound(randomSound.src);
  };

  // Function to play the sound
  const playSound = (soundSrc) => {
    const audio = new Audio(soundSrc);
    audio.play();
  };

  // Handle the player's guess
  const handleGuess = (guess) => {
    if (currentSound && guess === currentSound.name) {
      setMessage(`Yehey! You found the ${currentSound.name}!`);
      setTimeout(() => startGame(), 2000); // Reset the game after a short delay
    } else {
      setAttempts(attempts + 1);
      if (attempts >= 2) {
        setMessage("Try again! Resetting the game...");
        setTimeout(() => startGame(), 2000);
      } else {
        setMessage(`Wrong! Attempt ${attempts + 1}`);
      }
    }
  };

  return (
    <div>
      <h1>How Far You'll Go for the Sounds</h1>
      {gameStarted ? (
        <>
          <p>{message}</p>
          <button onClick={() => playSound(currentSound.src)}>
            Play Sound Again
          </button>
          <div>
            {soundsData.map((sound) => (
              <button key={sound.name} onClick={() => handleGuess(sound.name)}>
                {sound.name}
              </button>
            ))}
          </div>
        </>
      ) : (
        <button onClick={startGame}>Start the Game</button>
      )}
    </div>
  );
}

export default Place;
