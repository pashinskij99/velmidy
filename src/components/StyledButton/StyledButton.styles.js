import styled from 'styled-components/macro';
import { rem } from '../../utils/rem';

export const StyledButton = styled.button`
    flex-grow: 1;
    overflow: hidden;
    margin: 2rem;
    box-sizing: border-box;
    font-family: Seravek, sans-serif;
    font-size: ${rem(36)};
    font-weight: 700;
    max-width: 300px;
    height: 300px;
    color: #ffffff;
    border-inline: 3px #002e6d;
    border-radius: 15px;
    // background-color: var(--blue);
    background-color: #00ACC8;;
    border: none;
    // line-height: ${rem(150)};
    z-index: ${(props) => (props ? props.zIndex : 'auto')};
    filter: ${(props) =>
        props.shadow
            ? 'drop-shadow(-5px -5px 10px #ffffff) drop-shadow(5px 5px 10px #c7cdd7)'
            : 'none'};
    :active {
        color: var(--blue);
        background-color: var(--yellow);
        border-inline: none;
    }
    span {
      font-size: ${rem(207)};
      font-weight: 400;
    }
`;
