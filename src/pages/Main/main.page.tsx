import React from 'react';
import { Container } from './main.page.styles';
import { ReactComponent as GraphicSVG11_1 } from '../../assets/images/svg/Screen11-1.svg';
import { ReactComponent as GraphicSVG11_2 } from '../../assets/images/svg/Screen11-2.svg';
import { ReactComponent as GraphicSVG11_3 } from '../../assets/images/svg/Screen11-3.svg';
import { Graphic } from '../../components/Graphic/Graphic';

interface IMainPageProps {}

const MainPage: React.FC<IMainPageProps> = () => {
    return (
        <Container>
            <Graphic marginTop={`${38}`}>
                <GraphicSVG11_1 />
                <GraphicSVG11_2 />
                <GraphicSVG11_3 />
            </Graphic>
        </Container>
    );
};

export { MainPage };
