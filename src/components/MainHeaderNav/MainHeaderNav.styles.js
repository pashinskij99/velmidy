import styled from 'styled-components/macro';
import { rem } from '../../utils/rem'

export const HeaderButton = styled.button`
    position: ${({ active }) => active === 0 ? 'absolute' : 'static'};
    top: ${({ active }) => active === 0 ? '9rem' : '0'};
    font-family: Seravek, sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #002e6d;
    background: #ffffff !important;
    padding: ${rem(18)} ${rem(25)};
    border: none;
    border-radius: 25px;
    max-width: 300px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.05);
    // transform: translateX(15px);
    div {
        text-align: start;
    }
    :active {
        background-color: var(--yellow);
        color: var(--blue);
    }
`;

export const HeaderBackButton = styled.button`
    z-index: 100000;
    width: ${rem(150)};
    height: ${rem(145)};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    border-radius: 50%;
    :active {
        background-color: var(--yellow);
        color: var(--blue);
    }
    svg {
        width: ${rem(33)};
        transform: translateX(${-20}%);
    }
`;

export const HeaderBackButtonSmall = styled.button`
    z-index: 100000;
    height: 5rem;
    width: ${rem(85)};
    height: ${rem(85)};
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;
    border-radius: 50%;
    padding: 0 10px;
    // :active {
    //     background-color: var(--yellow);
    //     color: var(--blue);
    // }
    svg {
        width: ${rem(18)};
        transform: translateX(${-15}%);
    }
`

export const HeaderLeftButton = styled.button`
    width: ${rem(150)};
    height: ${rem(150)};
    border: none;
    background: transparent;
    border-radius: 200px;
    z-index: 100000;
    svg {
      width: 100%;
      height: 100%;
      padding: 15px;
    }
    // :active {
    //     background-color: var(--yellow);
    //     color: var(--blue);
    // }
`;
