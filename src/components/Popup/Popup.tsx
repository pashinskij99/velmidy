import { CloseBtn, CloseBtnIcon, Container, Content } from './Popup.styles';
import React, { Dispatch, SetStateAction } from 'react';

interface IModal {
    active: boolean;
    setActive: Dispatch<SetStateAction<boolean>>;
    type?: string;
}

export const Popup: React.FC<IModal> = ({
    children,
    active,
    setActive,
    type,
}) => {
    return (
        <Container onClick={() => setActive(false)} active={active}>
            <Content onClick={(e: Event) => e.stopPropagation()} type={type}>
                <CloseBtn onClick={() => setActive(false)}>
                    {/*<Cross />*/}
                    <CloseBtnIcon></CloseBtnIcon>
                </CloseBtn>
                {children}
            </Content>
        </Container>
    );
};
