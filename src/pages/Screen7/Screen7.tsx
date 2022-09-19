import { Graphic } from '../../components/Graphic/Graphic';
import graphic from '../../assets/images/svg/Screen11-1.svg';
import React from 'react';
import { Popup } from '../../components/Popup/Popup';
import { Container } from '../Screen6/Screen6.styles';
import { Screen7Info } from '../../components/PopupContent/Screen7Info/Screen7Info';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';

interface IScreen7 {
    modalActive: any;
    setModalActive: any;
}

export const Screen7: React.FC<IScreen7> = ({
    modalActive,
    setModalActive,
}) => {
    return (
        <Container>
            {/*<BackgroundBlue />*/}
            {/*<Graphic marginTop={`${38}`} zIndex={1000} type="main">*/}
                {/*<GraphicSVG11_1 />*/}
                {/*<Graphic11_1 />*/}
            <GraphicComponent backgroundSize={true} graphic={graphic} >
                <div></div>
            </GraphicComponent>
                {/*<Screen11Img>*/}
                {/*    <GraphicSVG11_2 />*/}
                {/*</Screen11Img>*/}
                {/*<GraphicSVG11_3 />*/}
            {/*</Graphic>*/}
            {modalActive ? (
                // <Popup
                //     active={modalActive}
                //     setActive={setModalActive}
                //     type="big"
                // >
                <Screen7Info />
                // </Popup>
              // null
            ) : null}
        </Container>
    );
};
