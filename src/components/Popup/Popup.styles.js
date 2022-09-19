import styled from 'styled-components/macro';
import { rem } from '../../utils/rem';
import close_icon from '../../assets/images/svg/ClosePopupIcon.svg';

export const Container = styled.div`
    z-index: 10000;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(3, 3, 3, 0.3);
    opacity: ${(props) => (props.active ? '100%' : '0%')};
    pointer-events: ${(props) => (props.active ? 'all' : 'none')};
    transition-duration: 0.5s;
`;

export const Content = styled.div`
    position: fixed;
    height: ${(props) => (props.type === 'big' ? '62rem' : 'auto')};
    padding: 1rem 2rem 1rem;
    border-radius: 20px;
    background-color: var(--custom-gray);
    margin: ${rem(56)};
    width: 42rem;
    font-family: Seravek, sans-serif;
    font-size: ${rem(24)};
    color: var(--blue);
    h2 {
        font-size: ${rem(30)};
        font-weight: 700;
        text-align: center;
        line-height: 49px;
        margin-top: 0;
        margin-right: 3rem;
        margin-left: 3rem;
    }
    h3 {
        font-size: ${rem(32)};
        font-weight: 400;
        text-align: center;
        line-height: 49px;
        margin-top: 0;
        margin-right: 3rem;
        margin-left: 3rem;
    }
    ol {
        margin-block-start: 0;
        li {
            margin-bottom: 20px;
        }
    }

    .scrollbar {
        margin-left: 30px;
        float: left;
        height: 83vh;
        overflow-y: auto;
        margin-bottom: 25px;
        padding-right: 1rem;
    }

    .scrollbar::-webkit-scrollbar-track {
        margin-top: 100px;
        -webkit-box-shadow: inset -5px -5px 10px #ffffff,
            inset 5px 5px 10px #c7cdd7;
        border-radius: 15px;
        background-color: #f5f5f5;
    }

    .scrollbar::-webkit-scrollbar {
        width: 9px;
    }

    .scrollbar::-webkit-scrollbar-thumb {
        border-radius: 9px;
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: var(--blue);
    }
`;

export const CloseBtn = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 15px;
    position: absolute;
    right: ${rem(5)};
    top: ${rem(5)};
    width: 65px;
    height: 65px;
`;

export const CloseBtnIcon = styled.button`
    display: block;
    background: ${`url(${close_icon})no-repeat center`};
    background-size: 40%;
    border: none;
    width: ${rem(55)};
    height: ${rem(55)};
`

export const Info = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-right: 3.5rem;
    padding-left: 3rem;
    h2 {
        justify-self: center;
        align-self: center;
    }
    .list {
        list-style: decimal;
        margin-left: 3rem;
        padding-right: 3.5rem;
        font-size: 1.7rem;
        color: #4E5457;
        li {
            margin-bottom: 0.5rem;
        }
    }
    .paragraph {
        font-size: ${rem(24)};
        font-weight: 400;
        line-height: 30px;
        color: #4E5457;
    }
    .blue-text {
        display: inline-block;
        color: #00ACC8;
        margin: ${rem(10)} 0 ${rem(40)};
    }
    a {
        color: #00ACC8;
        text-decoration: none;
        border-bottom: 1px solid #00ACC8;
    }
`;
