import styled from 'styled-components/macro';
import graphic_13_1_svg from '../../assets/images/svg/Screen13-1.svg'
import graphic_11_1_svg from '../../assets/images/svg/Screen11-1.svg'
import graphic_background from '../../assets/images/svg/background_graphic.svg'

export const SvgContainer = styled.div`
    // display: flex;
    // flex-direction: column;
    // justify-content: space-between;
    margin: 0 auto;
    // align-items: center;
    height: 100vh;
    z-index: ${(props) => (props.zIndex ? props.zIndex : 'auto')};
    background: var(--custom-gray);
    border-radius: 15px;
    // padding: 0rem 0rem;
    padding: 2rem 8rem;
    // max-width: ${(props) => (props.type === 'main' ? '91rem' : '93rem')};
    max-width: '100%';
`;

export const Graphic13_1 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: url(${graphic_13_1_svg})no-repeat top / cover;
    height: 100vh;
    width: 100vw;
`

export const GraphicComponent = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ white_background }) => white_background ? '#ffffff' : `url(${graphic_background})no-repeat top / cover` };
    min-height: 100vh;
    max-height: max-content;
    height: 100vh;
    width: 100vw;
    div {
        background: url(${({ graphic }) => graphic})no-repeat top / cover;
        min-height: 100vh;
        background-size: 100% 100%;
        height: 100vh;
        width: 100vw;
    }
`

export const GraphicContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background: #fff;
    // img {
    //   min-width: 100%;
    //   min-height: 100%;
    //   flex-shrink: 0;
    //   object-fit: cover;
    // }
`

export const Graphic15_1 = styled.div``

export const Graphic11_1 = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    background: url(${graphic_11_1_svg})no-repeat top / cover;
    height: 100vh;
    width: 100vw;
`
