import { useState } from 'react';
import ImageSources from '../ImageSources';

const totalNumber = ImageSources.length;

const AbilityAndMotiveQuiz = () => {
  const [randomNumber] = useState(Math.floor(Math.random() * totalNumber));

  const setRandomNumber = () => {
    const newRandomNumber = Math.floor(Math.random() * totalNumber);
    if (newRandomNumber !== randomNumber) {
      return newRandomNumber;
    }
    return setRandomNumber();
  };

  return null;
};

export default AbilityAndMotiveQuiz;
