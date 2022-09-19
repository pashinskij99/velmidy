import styled from 'styled-components/macro'
import { rem } from '../../utils/rem'

export const MicroWrapper = styled.div`
    position: absolute !important;
    right: 15px;
    bottom: 25%;
    background: #FFF;
    width: ${rem(300)};
    border-radius: 17.027px;
    z-index: 1000;
    img {
        width: 100%;
        border-radius: 17.027px 17.027px 0 0;
    }
`

export const MicroContent = styled.div`
    font-family: 'Seravek', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: ${rem(19)};
    line-height: 19px;
    letter-spacing: -0.02em;
    
    color: #1F3266;
    padding: ${rem(13)} ${rem(15)};
`