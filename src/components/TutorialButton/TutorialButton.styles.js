import styled from 'styled-components/macro'
import { rem } from '../../utils/rem'

export const BtnTutorialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute !important;
    right: 15px;
    bottom: ${rem(35)};
    font-family: 'Seravek', sans-serif;
    font-weight: 400;
    font-size: ${rem(36)};
    background: #00ACC8;
    width: ${rem(65)};
    height: ${rem(65)};
    border-radius: 50%;    
    color: #FFFFFF;
    pointer-events: all;
    touch-action: all;
`