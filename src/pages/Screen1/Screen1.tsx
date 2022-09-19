import React from 'react';
import { Background, BackgroundBlue, Container, Tools } from './Screen1.styles';
import { StyledButton } from '../../components/StyledButton/StyledButton.styles';
import { setWay } from '../../storage/reducers/app.reducer';
import { useDispatch } from 'react-redux';

export const Screen1: React.FC = () => {
    const dispatch = useDispatch();

    const selectWay = (e: React.FormEvent<EventTarget>) => {
        dispatch(setWay((e.target as HTMLInputElement).value));
        console.log(dispatch(setWay((e.target as HTMLInputElement).value)))
    };

    return (
        <div>
            <Container>
                <Background />
                <BackgroundBlue />
                <h2>Выберите сценарий</h2>
                <Tools>
                    <StyledButton
                        zIndex={10000}
                        shade={false}
                        value="b"
                        onClick={selectWay}
                    >
                        Гепатит
                        <br/>
                        <span>B</span>
                    </StyledButton>
                    <StyledButton
                      zIndex={10000}
                      value="c"
                      shade={false}
                      onClick={selectWay}
                    >
                        Гепатит
                        <br/>
                        <span>C</span>
                    </StyledButton>
                </Tools>
            </Container>
        </div>
    );
};
