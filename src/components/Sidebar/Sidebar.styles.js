import styled from 'styled-components/macro';
import { rem } from '../../utils/rem';
import chevronNext from '../../assets/icons/svg/ChevronNext.svg';
import chevronBlue from '../../assets/icons/svg/ChevronBlue.svg';

export const SidebarWrapper = styled.div`
  position: absolute;
  bottom: 25%;
  left: 15px;
  width: ${rem(310)};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SidebarContent = styled.ul`
    z-index: 1000;
    display: flex;
    flex-direction: column;
    width: ${rem(310)};
    background-color: #fff;
    border-radius: 0px 0px 20px 20px;
    color: #4E5457;
    padding-bottom: 1rem;
    li {
        font-size: ${rem(16)};
        padding: 1rem 0;
        display: flex;
        line-height: 15px;
        align-items: flex-start;
        svg {
            margin-left: ${rem(27)};
            width: ${rem(30)};
            height: ${rem(30)};
        }
        span {
            font-family: 'Roboto', sans-serif;
            padding-left: 1rem;
            padding-top: 0.25rem;
            max-width: 70%;
        }
    }
`;

export const SidebarBlock = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0px 15px 15px 0px;
`;

export const Button = styled.button`
    font-family: Seravek, sans-serif;
    font-weight: 700;
    font-size: ${rem(24)};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${rem(21)} ${rem(27)};
    height: 56px;
    width: ${rem(310)};
    background-color: #fff;
    color: var(--blue);
    z-index: 1000;
    position: relative;
    border: none;
    border-radius: ${ (props) => (props.active ? '20px 20px 0 0' : '20px')};
    span {
        padding-right: 0.5rem;
    }
`;

export const SpanButton = styled.span`
    position: absolute;
    right: 18px;
    display: block;
    background: ${ (props) => (props.active ? `url(${chevronBlue})` : `url(${chevronNext})`)};
    background-repeat: no-repeat;
    background-size: 80%;
    width: 24px;
    height: 19px;
    transform: translateY(20%);
`
