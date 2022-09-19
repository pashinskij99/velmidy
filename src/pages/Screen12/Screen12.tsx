import graphic from '../../assets/images/svg/Screen14-1.svg';
import React from 'react';
import { Container } from '../Screen6/Screen6.styles';
import { Screen12Info } from '../../components/PopupContent/Screen12Info/Screen12Info';
import { IScreen } from '../../storage/types/app.types';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';

export const Screen12: React.FC<IScreen> = ({
    modalActive,
    setModalActive,
}) => {
    return (
        <Container>
            <GraphicComponent backgroundSize={true} graphic={graphic} >
                <div></div>
            </GraphicComponent>
            {modalActive ? (
                <Screen12Info />
            ) : null}
        </Container>
    );
};
