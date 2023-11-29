import React, { useState } from "react";
import Dice0 from "../Images/Dice0.jpg";
import Dice1 from "../Images/Dice1.png";
import Dice2 from "../Images/Dice2.png";
import Dice3 from "../Images/Dice3.png";
import Dice4 from "../Images/Dice4.png";
import Dice5 from "../Images/Dice5.png";
import Dice6 from "../Images/Dice6.png";

const Dice = () => {
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 6));
  };

  const diceImages = [Dice0, Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];

  return (
    <div className="wrapper">
      <img src={diceImages[num]} onClick={handleClick} alt="" />
    </div>
  );
};

export default Dice;
