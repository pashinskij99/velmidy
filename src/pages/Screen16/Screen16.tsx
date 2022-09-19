import graphic from '../../assets/images/svg/Screen17.svg';
import React from 'react';
import { Container } from '../Screen6/Screen6.styles';
import { IScreen } from '../../storage/types/app.types';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';
import { Popup } from '../../components/Popup/Popup';
import { Info } from '../Screen15/Screen15.styles';

// const screen09Style = {
//   width: '75rem',
// };

export const Screen16: React.FC<IScreen> = ({ modalActive, setModalActive }) => {
  return (
    <Container>
      <GraphicComponent graphic={graphic}>
        <div></div>
      </GraphicComponent>
      {modalActive ? (
        <Popup active={modalActive} setActive={setModalActive}>
          <Info>
            <h2>Источники и сокращения</h2>
            <ol className="list" type="1">
              <li>АН — аналог нуклеоз(т)ида;</li>
              <li>ОТП — ортотопическая трансплантация печени;</li>
              <li>ПВТ — противовирусная терапия;</li>
              <li>ТДФ — тенофовира дизопроксила фумарат;</li>
              <li>ЭТВ — энтекавир;</li>
              <li>*ТАФ в составе препарата Вемлиди® зарегистрирован для лечения хронического гепатита В</li>
            </ol>
            <p className="paragraph">
              Хубутия М.Ш., Восканян С.Э., Сюткин В.Е., Чуланов В.П.,
              Новрузбеков М.С., Пасечников В.Д. и др. Трансплантология. 2020;12(3):231-244.
              <a href="https://doi.org/10/23873/2074-0506-2020-12-3- 231-244">
                https://doi.org/10/23873/2074-0506-2020-12-3- 231-244
              </a>
            </p>
          </Info>
          );
        </Popup>
      ) : null}
    </Container>
  );
};
