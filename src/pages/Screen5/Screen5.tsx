import graphic1 from '../../assets/images/svg/Screen05.svg';
import graphic2 from '../../assets/images/svg/Slide5.svg';
import React from 'react';
import { Container } from '../Screen6/Screen6.styles';
import { Screen23 } from '../Screen23/Screen23';
import { IScreen } from '../../storage/types/app.types';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';
import { Slider } from '../../components/Slider/Slider';
import { Info } from '../Screen15/Screen15.styles';

export const Screen5: React.FC<IScreen> = ({ modalActive, setModalActive }) => {
  const Slide1 = (
    <GraphicComponent backgroundSize={true} graphic={graphic1}>
      <div></div>
    </GraphicComponent>
  )

  const Slide2 = (
    <GraphicComponent backgroundSize={true} graphic={graphic2}>
      <div></div>
    </GraphicComponent>
  )

  const sliderContent: JSX.Element[] = [
    Slide1,
    Slide2,
  ];
  // const infoContent: JSX.Element[] = [Info1, Info2, Info3];

  return (
    <Container>
      <div>
        <Slider
          content={sliderContent}
          isProfile={true}
          startingSlide={0}
        />
      </div>
      {modalActive ? (
        <Info>
          <h2>Источники и сокращения</h2>
          <ol className="list" type="1">
            <li>https://grls.rosminzdrav.ru/Grls_View_v2.aspx?routingGuid=73e28aae-5de5-48c7-89b5-3a82fc33f95d&t= Инструкция по медицинскому применению препарата Вемлиди® ЛП-005643</li>
            <li>EASL CPG HBV. J Hepatol 2017;67:370–98</li>
            <li>*Актуально при невозможности назначения Биктарви ® /Генвоя®</li>
            <li>
              ТДФ — тенофовира дизопроксила фумарат
            </li>
            <li>
              ЛАМ — ламивудин
            <br/>
              АН — аналоги нуклеотидов
            </li>
            <li>МПК — минеральная плотность костей</li>
            <li>ХГВ — хронический гепатит В</li>
            <li>ЭТВ — энтекавир</li>
            <li>ИМП - инструкция по медицинскому применению</li>
          </ol>
        <span className="blue-text"></span>
        </Info>
      ) : null}
    </Container>
  );
};
