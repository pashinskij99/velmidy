import styled from 'styled-components/macro';
import { rem } from '../../utils/rem';
import background from '../../assets/images/background/background.jpg';

export const Container = styled.div`
    h2 {
        font-size: ${rem(54)};
        font-family: Seravek, sans-serif;
        margin-block-start: 0;
        margin-block-end: 0;
        z-index: 10000;
        font-weight: 700;
        color: #1F3266;
        margin-bottom: 30px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 0 105px;
    margin: auto;
`;

export const Background = styled.div`
    position: fixed;
    z-index: 9000;
    width: 100vw;
    height: 100vh;
    background: ${`url(${background})no-repeat top / cover`}
`;

export const BackgroundBlue = styled.div`
    position: fixed;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    opacity: 0.5;
    background: #333333;
    opacity: 0.3;
`;

export const Tools = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const BG = styled.div`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
`;
