import { useState } from "react";

const TebakAngka = () => {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [showReset, setShowReset] = useState<boolean>(false);

  const handleGuess = () => {
    const guessedNumber = parseInt(guess);
    setAttempts(attempts + 1);
    setShowReset(true);
    if (guessedNumber === randomNumber) {
      setMessage(
        `Congratulations! You've guessed the number ${randomNumber} in ${
          attempts + 1
        } attempts.`
      );
    } else if (guessedNumber < randomNumber) {
      setMessage("Too low! Try again.");
    } else {
      setMessage("Too high! Try again.");
    }
  };

  const handleReset = () => {
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
    setAttempts(0);
    setShowReset(false);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p className="text">Enter your guess:</p>
      <div>
        <input
          value={guess}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setGuess(e.target.value)
          }
        />
        <button onClick={handleGuess}>Submit Guess</button>
      </div>
      <p className="text">{message}</p>
      {showReset && (
        <button onClick={handleReset} style={{ width: 100 }}>
          Reset Game
        </button>
      )}
    </div>
  );
};

export default TebakAngka;
