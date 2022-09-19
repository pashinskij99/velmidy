import graphic from '../../assets/images/svg/Screen13-1.svg';
import React from 'react';
import { Container } from '../Screen6/Screen6.styles';
import { Popup } from '../../components/Popup/Popup';
import { Info } from '../Screen15/Screen15.styles';
import { IScreen } from '../../storage/types/app.types';
import { GraphicComponent } from '../../components/Graphic/Graphic.styles';

export const Screen10: React.FC<IScreen> = ({
    modalActive,
    setModalActive,
}) => {
    return (
        <Container>
            <GraphicComponent graphic={graphic} >
                <div></div>
            </GraphicComponent>
            {modalActive ? (
                <Popup active={modalActive} setActive={setModalActive}>
                    <Info>
                        <h2>Источники и сокращения</h2>
                        <ol type="1">
                            <li>TAF – тенофовира алафенамид;</li>
                            <li>ХГВ-хронический вирусный гепатит;</li>
                            <li>
                                рСКФ-расчётная скорость клубочковой фильтрации;
                            </li>
                            <li>
                                CKD-EPI -Сотрудничество в области эпидемиологии
                                хронических заболеваний почек;
                            </li>
                            <li>
                                Низкая виремия, ХГВ ДНК ${'<'} 2000
                                МЕ/мл).Группа слабого ответа, ХГВ ДНК ≥
                                2000МЕ/мл.
                            </li>
                            <li>Zeng A-J, et al. AASLD 2021. 824</li>
                        </ol>
                    </Info>
                </Popup>
            ) : null}
        </Container>
    );
};
