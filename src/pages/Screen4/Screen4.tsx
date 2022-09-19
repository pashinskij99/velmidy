import graphic from '../../assets/images/svg/Screen04.svg';
// import graphic2 from '../../assets/images/svg/Slide5.svg';
import React from 'react';
import { Container } from '../Screen6/Screen6.styles';
import { Screen23 } from '../Screen23/Screen23';
import { IScreen } from '../../storage/types/app.types';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';
import { Slider } from '../../components/Slider/Slider';

export const Screen4: React.FC<IScreen> = ({ modalActive, setModalActive }) => {
  return (
    <Container>
      <GraphicComponent backgroundSize={true} graphic={graphic}>
        <div></div>
      </GraphicComponent>
      {modalActive ? (
        <Screen23 />
      ) : null}
    </Container>
  );
};
