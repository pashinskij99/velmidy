import { SvgContainer } from './Graphic.styles';
import React from 'react';

interface IGraphic {
    marginTop: string;
    style?: any;
    zIndex?: number;
    type?: string;
}

export const Graphic: React.FC<IGraphic> = ({
    children,
    marginTop,
    style,
    zIndex,
    type,
}) => {
    return (
        <SvgContainer
            marginTop={marginTop}
            style={style}
            zIndex={zIndex}
            type={type}
        >
            {children}
        </SvgContainer>
    );
};
