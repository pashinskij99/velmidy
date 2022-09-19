import styled from 'styled-components/macro';

export const StyledPlayButtonWrapper = styled.div`
    z-index: ${(props) => (props.active ? 4000 : 6000)};
`;

export const StyledPlayButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #002e6d;
    border: none;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    img {
        transform: translateX(5px);
        width: 25.5px;
    }
`;
