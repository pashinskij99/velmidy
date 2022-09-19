import graphic from '../../../assets/images/svg/Screen15.svg';
import React from 'react';
import { GraphicComponent } from '../../Graphic/Graphic.styles';

export const Screen12Info: React.FC = () => {
    return (
        <GraphicComponent backgroundSize={true} graphic={graphic}>
            <div></div>
        </GraphicComponent>
    );
};
