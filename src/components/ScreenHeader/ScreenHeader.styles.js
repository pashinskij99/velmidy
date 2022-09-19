import styled from 'styled-components/macro';

export const HeaderContainer = styled.header`
    width: 100%;
    display: block;
    z-index: 9000;
    padding-top: 25px;
`;

export const HeaderButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Seravek, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: center;
    line-height: 20px;
    color: #ffffff;
    background: #002e6d;
    padding: 0 35px;
    height: 65px;
    border: none;
    border-radius: 15px;
    max-width: 22rem;
    :active {
        background-color: var(--yellow);
        color: var(--blue);
    }
`;

export const HeaderLargeButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Seravek, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    text-align: center;
    line-height: 20px;
    color: #ffffff;
    background: #002e6d;
    padding: 0 35px;
    height: 65px;
    border: none;
    border-radius: 15px;
    flex-grow: 1;
    left: 0;
    right: 0;
    margin: 0 15rem !important;
    position: absolute;
    //:active {
    //    background-color: var(--yellow);
    //    color: var(--blue);
    //}
`;

export const HeaderBackButton = styled.button`
    width: 65px;
    height: 65px;
    position: fixed;
    border: none;
    left: 56px;
    top: 25px;
    background: #00ACC8;
    border-radius: 15px;
`;

export const HeaderInfoButton = styled.button`
    margin-right: 1.5rem !important;
    pointer-events: all;
    background: #00ACC8;
    border-radius: 15px;
    height: 65px;
    border: none;
    padding: 0 10px;
    box-sizing: inherit;
`;

export const Wrapper = styled.div`
    display: flex;
    margin-left: auto;
    width: 100%;
    justify-content: end;
    button {
        margin-right: 3.14rem;
    }
    button {
        &:last-child {
            margin: 0;
        }
    }
`;
