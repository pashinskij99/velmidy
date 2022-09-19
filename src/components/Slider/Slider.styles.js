import styled from 'styled-components/macro';
import { rem } from '../../utils/rem';

export const Item = styled.div`
    position: absolute;
    width: 100%;
    transition-duration: 0.4s;
    opacity: ${(props) => (props.activeSlide === props.index ? '100%' : '0%')};
`;

export const SvgContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SliderImg = styled.div`
    margin-top: ${rem(-60)};
    margin-bottom: ${rem(24)};
`;

export const SliderInfo = styled.div`
    margin-top: ${rem(16)};
    display: flex;
    justify-content: space-evenly;
`;

export const Container = styled.div`
    position: relative;
    height: 60rem;
    padding-top: 4rem;
    padding-bottom: 4rem;
    border-radius: 15px;
    width: 91rem;
    margin: auto;
    z-index: 100;
    background-color: var(--custom-gray);
`;

export const SliderButton = styled.button`
    // position: ${({ isProfile }) => isProfile ? 'fixed' : 'static'};
    // left: ${({ isProfile }) => isProfile ? '0' : 'auto'};
    // top: ${({ isProfile }) => isProfile ? '0' : 'auto'};
    z-index: 9000;
    pointer-events: all;
    background-color: #00ACC8;
    border-radius: 50%;
    width: 65px;
    height: 65px;
    border: none;
    margin: ${rem(20)};
    :disabled {
        opacity: 0.2;
    }
    :active {
        background-color: var(--yellow);
        color: var(--blue);
    }
`;

export const Tools = styled.div`
    position: absolute;
    bottom: 3rem;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -11rem;
`;

export const Dots = styled.button`
    position: relative;
    display: block;
    width: ${rem(7)};
    height: ${rem(7)};
    background: ${({ active }) => active ? '#00ACC8' : '#C4C4C4'};
    border-radius: 50%;
    border: none;
    z-index: 9000;
    margin: 0 ${rem(17.5)};
`;
