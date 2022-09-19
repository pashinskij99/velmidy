import { Graphic } from '../../components/Graphic/Graphic';
import graphic from '../../assets/images/svg/Screen09.svg';
import React from 'react';
import { Container } from './Screen6.styles';
import { Popup } from '../../components/Popup/Popup';
import { Screen23 } from '../Screen23/Screen23';
import { BackgroundBlue } from '../Screen1/Screen1.styles';
import { IScreen } from '../../storage/types/app.types';
import { GraphicComponent, GraphicContainer } from '../../components/Graphic/Graphic.styles';

const screen09Style = {
    width: '75rem',
};

export const Screen6: React.FC<IScreen> = ({ modalActive, setModalActive }) => {
    return (
        <Container>
            <GraphicComponent backgroundSize={true} graphic={graphic}>
              <div></div>
            </GraphicComponent>
            {/*<GraphicContainer>*/}
            {/*  <img src={graphic} alt=""/>*/}
            {/*</GraphicContainer>*/}
            {/*<BackgroundBlue />*/}
            {/*<Graphic marginTop={`${20}`} zIndex={1000}>*/}
            {/*    <GraphicSVG09 style={screen09Style} />*/}
            {/*</Graphic>*/}
            {modalActive ? (
                // <Popup
                //     active={modalActive}
                //     setActive={setModalActive}
                //     type="big"
                // >
                // <GraphicComponent graphic={graphic} />

                <Screen23 />
                // </Popup>
            ) : null}
        </Container>
    );
};
