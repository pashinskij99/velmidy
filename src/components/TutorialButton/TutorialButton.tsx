import React from 'react';
import { BtnTutorialWrapper } from './TutorialButton.styles';

const handleClick = () => {
  document.body.classList.toggle('tutorial-on')
}

const TutorialButton = () => {
  return (
    <BtnTutorialWrapper onClick={handleClick} className="tutorial tutorial-start">
      ?
    </BtnTutorialWrapper>
  );
};

export default TutorialButton;