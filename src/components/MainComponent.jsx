import React, { useState } from "react";

const MainComponent = () => {
  const [qnumber, setQnumber] = useState("");
  const [gameMessage, setGameMessage] = useState("");
  const [chance, setChance] = useState(5);
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10);
  }

  const inputText = (e) => {
    setQnumber(e.target.value);
  };

  const checkNumber = () => {
    const number = parseInt(qnumber);
    if (isNaN(number)) {
      setGameMessage("Та тоо оруулна уу");
      return;
    }
    if (chance <= 1) {
      setGameMessage(`Мулгуу сда. Тоо: ${randomNumber}.`);
      return;
    }

    if (number === randomNumber) {
      setGameMessage("Баяр хүргий, та яллаа. Санасан тоо: " + randomNumber);
    } else if (number < randomNumber) {
      setGameMessage("Арай их тоо бичээрэй");
    } else if (number > randomNumber) {
      setGameMessage("Арай бага тоо бичээрэй");
    }
    setChance(chance - 1);
  };

  const restartGame = () => {
    setQnumber("");
    setGameMessage("");
    setChance(5);
    setRandomNumber(generateRandomNumber());
  };

  return (
    <div>
      <input
        className="input-type"
        type="text"
        placeholder="Тоогоо энд бичээрэй"
        value={qnumber}
        onChange={inputText}
      />
      <button onClick={checkNumber} className="button">
        Дараарай
      </button>
      <div className="message">
        <p className="gameMessage">{gameMessage}</p>
        <p className="chance">Боломж: {chance}</p>
      </div>
      <button onClick={restartGame} className="restart">
        Ахин эхлүүлэх
      </button>
    </div>
  );
};

export default MainComponent;
