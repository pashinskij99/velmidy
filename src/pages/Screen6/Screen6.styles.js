import styled from 'styled-components/macro';

export const Container = styled.div`
    z-index: 6000;
    position: fixed;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 100%;
    left: 0;
    right: 0;
    pointer-events: none;
    box-sizing: border-box;
    width: 100%;
    padding-left: 3rem;
    padding-right: 3rem;
`;

export const PlayWrapper = styled.div`
    z-index: 1000;
    position: fixed;
    left: 4.68rem;
    bottom: 2rem;
    display: flex;
    align-items: flex-start;
    width: 100%;
`;
