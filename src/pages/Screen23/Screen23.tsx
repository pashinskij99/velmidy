import { Graphic } from '../../components/Graphic/Graphic';
import graphic from '../../assets/images/svg/Screen23-1.svg';
// import { ReactComponent as GraphicSVG23_2 } from '../../assets/images/svg/Screen23-2.svg';
// import { ReactComponent as GraphicSVG23_3 } from '../../assets/images/svg/Screen23-3.svg';
// import { ReactComponent as GraphicSVG23_4 } from '../../assets/images/svg/Screen23-4.svg';
import React from 'react';
import { Container } from '../Main/main.page.styles';
import { Screen23Img, Screen23Links } from './Screen23.styles';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';

export const Screen23: React.FC = () => {
    return (
        // <Container>
        <GraphicComponent backgroundSize={true} graphic={graphic} >
            <div></div>
        </GraphicComponent>
        // </Container>
    );
};
