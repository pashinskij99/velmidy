import { Graphic } from '../../Graphic/Graphic';
import graphic from '../../../assets/images/svg/Screen24-1.svg';
// import { ReactComponent as GraphicSVG12 } from '../../../assets/images/svg/Screen12.svg';
// import { ReactComponent as GraphicSVG12_2 } from '../../../assets/images/svg/Screen12-2.svg';
// import { ReactComponent as Vector } from '../../../assets/images/svg/Vector.svg';
import React from 'react';
import { Container } from '../../../pages/Main/main.page.styles';
import { Description, Title } from './Screen7Info.styles';
import { GraphicComponent } from '../../Graphic/Graphic.styles';

export const Screen7Info: React.FC = () => {
    const screen12Style = {
        width: '95%',
    };

    return (
        <GraphicComponent backgroundSize={true} graphic={graphic} >
            {/*<img src={} alt="graphic"/>*/}
            <div></div>
        </GraphicComponent>
        // <div className="scrollbar" style={screen12Style}>
        //     <Container>
        //         <Title>
        //             Применение TAF у пациентов с хроническим гепатитом В и
        //             нарушением функции печени
        //         </Title>
        //         <Description>
        //             Исследование 4035: исследование II фазы по изучению перехода
        //             на TAF при хроническом гепатите В
        //         </Description>
        //         <Description>Анализ данных за 24 недели</Description>
        //         <Graphic marginTop={`${38}`}>
        //             <GraphicSVG12 />
        //         </Graphic>
        //         <Graphic
        //             marginTop={`${-20}`}
        //             style={{
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 alignItems: 'baseline',
        //                 position: 'absolute',
        //                 height: '3rem',
        //                 padding: '0',
        //                 left: '5rem',
        //                 bottom: '2rem',
        //                 backgroundColor: 'var(--custom-gray)',
        //                 borderRadius: 0,
        //             }}
        //         >
        //             <Vector style={{ marginBottom: '10px' }} />
        //             <GraphicSVG12_2 style={{ paddingLeft: '2rem' }} />
        //         </Graphic>
        //     </Container>
        // </div>
    );
};
