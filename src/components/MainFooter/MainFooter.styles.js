import styled from 'styled-components/macro';
import { rem } from '../../utils/rem';
import footer_lines from '../../assets/images/svg/FooterLines.svg'

export const SubLabel = styled.div`
    color: #00ACC8;
    font-weight: 400;
    font-size: ${rem(30)};
    margin-right: ${rem(20)};
`

export const Tools = styled.div`
    top: 20px;
    display: flex;
    position: relative;
`;

export const FooterButton = styled.div`
    position: relative;
    font-family: Seravek, sans-serif;
    font-size: ${rem(19)};
    font-weight: 700;
    width: ${rem(200)};
    height: ${rem(85)};
    box-sizing: border-box;
    color: ${(props) =>
        props.index === props.step.index ? '#1F3266' : '#1F3266'};
    div {
        &:first-child {
            border-right: 2px solid #d8d8d8;  
        }
    }
    
    &:first-child {
        div {
            border-radius: ${rem(25)} 0 0 ${rem(25)};      
        }
    }
    &:last-child {
        border-radius: 15px;
        border-right: none;
        margin-left: 2rem;
    }
    &:nth-child(5) {
        div {
            justify-content: flex-end;      
        }
    }
    &:nth-child(6) {
        div {
            flex-direction: column;
            border-radius: 0 15px 15px 0;
            border-right: none;
        }
    }
    &:nth-child(7) {
        position: absolute;
        width: ${rem(300)};
        height: ${rem(75)};
        left: 61.5rem;
        top: -6.8rem;
        border-right: none;
        div {
            border-radius: 15px;
            text-align: center;
        }
        ::after {
            content: '';
            position: absolute;
            right: ${rem(-190)};
            top: ${rem(48)};
            width: ${rem(877)};
            height: ${rem(75)};
            background: ${`url(${footer_lines})no-repeat top center / cover`};
            background-size: 75%;
            z-index: -1;
        }
    }
    &:nth-child(8) {
        div {
            border-radius: 15px;
        }
    }
`;

export const FooterButtonWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;    
    padding: ${rem(15)};
    overflow: hidden;
    background-color: ${(props) =>
  props.index === props.step.index
    ? '#D3ECF2'
    : '#ffffff'};
`

export const BorderBlock = styled.div`
    position: absolute;
    bottom: 0;
    right: 0;
    height: 6px;
    width: 100%;
    background: ${
      (props) => props.index === props.step.index 
        ? '#1F3266'
        : 'transparent'};
`

export const Description = styled.span`
    font-size: 0.732rem;
    color: #00ACC8;
    font-weight: 700;
`;
