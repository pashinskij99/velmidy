import React, { useState } from 'react';
import { Slider } from '../../components/Slider/Slider';
import graphic1 from './../../assets/images/svg/Slide1.svg';
import graphic2 from './../../assets/images/svg/Slide2.svg';
import graphic3 from './../../assets/images/svg/Slide3.svg';
import { Container } from '../Screen6/Screen6.styles';
import { Info } from './Screen15.styles';
import { Popup } from '../../components/Popup/Popup';
import { IScreen } from '../../storage/types/app.types';
import graphic4 from '../../assets/images/svg/Slide4.svg';
import graphic5 from '../../assets/images/svg/Slide5.svg';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';

export const Screen15: React.FC<IScreen> = ({
    modalActive,
    setModalActive,
}) => {
    const [activeInfo, setActiveInfo] = useState<number>(0);

    const Slide1 = (
      <GraphicComponent graphic={graphic1}>
          <div></div>
      </GraphicComponent>
    );
    const Slide2 = (
      <GraphicComponent graphic={graphic2}>
          <div></div>
      </GraphicComponent>
    );
    const Slide3 = (
      <GraphicComponent graphic={graphic3}>
          <div></div>
      </GraphicComponent>
    );
    // const Slide4 = (
    //   <GraphicComponent graphic={graphic4}>
    //       <div></div>
    //   </GraphicComponent>
    // );
    // const Slide5 = (
    //   <GraphicComponent white_background={true} graphic={graphic5}>
    //       <div></div>
    //   </GraphicComponent>
    // );

    const Info1 = (
        <Info>
            <h2>Источники и сокращения</h2>
            <ol className="list" type="1">
                <li>ХГВ-хронический гепатит В;</li>
                <li>ХПН-хроническая почечная недостаточность;</li>
                <li>рСКФ — расчетная скорость клубочковой фильтрации;</li>
                <li>
                    CKD-EPI -Сотрудничество в области эпидемиологии хронических
                    заболеваний почек;
                </li>
                <li>
                    ДНК ВГВ — ДНК вируса гепатита В;
                    <br/>
                    TAF — тенофовира алафенамид;
                </li>
                <li>TAF – тенофовира алафенамид;</li>
                <li>АЛТ — аланинаминотрансфераза;</li>
                <li>Gane EJ, et al. AASLD 2021. 803</li>
            </ol>
            <span className="blue-text"></span>
        </Info>
    );
    const Info2 = (
        <Info>
            <h2>Источники и сокращения</h2>
            <ol className="list" type="1">
                <li>β2M, β2-микроглобулин;</li>
                <li>рСКФ — расчетная скорость клубочковой фильтрации;</li>
                <li>
                    CKD-EPI -Сотрудничество в области эпидемиологии хронических
                    заболеваний почек;
                </li>
                <li>TAF – тенофовира алафенамид;</li>
                <li>TDF- Тенофовира дизопроксил фумарат;</li>
                <li>Gane EJ, et al. AASLD 2021. 803</li>
            </ol>
            <span className="blue-text"></span>
        </Info>
    );
    const Info3 = (
        <Info>
            <h2>Источники и сокращения</h2>
            <ol className="list" type="1">
                <li>рСКФ — расчетная скорость клубочковой фильтрации;</li>
                <li>CKD-EPI — сотрудничество в области эпидемиологии хронических заболеваний почек;</li>
                <li>ТАФ — тенофовира алафенамид;</li>
                <li>
                    ТДФ — тенофовира дизопроксила фумарат;
                </li>
                <li>Gane EJ, et al. AASLD 2021. 803</li>
            </ol>
            <span className="blue-text"></span>
        </Info>
    );

    const updateInfo = (slide: number) => {
        setActiveInfo(slide);
    };

    const sliderContent: JSX.Element[] = [
        Slide1,
        Slide2,
        Slide3,
        // Slide4,
        // Slide5,
    ];
    const infoContent: JSX.Element[] = [Info1, Info2, Info3];

    return (
        <Container style={{ zIndex: 8000 }}>
            {/*<BackgroundBlue />*/}
            {modalActive ? (
                <Popup active={modalActive} setActive={setModalActive}>
                    {infoContent[activeInfo]}
                </Popup>
            ) : null}
            <div>
              <Slider
                content={sliderContent}
                updateInfo={updateInfo}
                startingSlide={0}
              />
            </div>
        </Container>
    );
};
