import { Graphic } from '../../components/Graphic/Graphic';
import { ReactComponent as GraphicSVG09 } from '../../assets/images/svg/Screen09.svg';
import React from 'react';
import { Container } from './Screen6_C.styles';
import { Popup } from '../../components/Popup/Popup';
import { Screen23 } from '../Screen23/Screen23';
import { BackgroundBlue } from '../Screen1/Screen1.styles';
import { IScreen } from '../../storage/types/app.types';

const screen09Style = {
  width: '75rem',
};

export const Screen6_C: React.FC<IScreen> = ({ modalActive, setModalActive }) => {
  return (
    <Container>
      {/*<BackgroundBlue />*/}
      {/*<Graphic marginTop={`${20}`} zIndex={1000}>*/}
      {/*  <GraphicSVG09 style={screen09Style} />*/}
      {/*</Graphic>*/}
      {modalActive ? (
        // <Popup
        //   active={modalActive}
        //   setActive={setModalActive}
        //   type="big"
        // >
          <Screen23 />
        // </Popup>
      ) : null}
    </Container>
  );
};
