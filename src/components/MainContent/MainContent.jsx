import React, { useEffect } from 'react';
import styles from './styles.module.scss';
import { Scene } from '../../webgl/scenes/mainScene';
import { useDispatch, useSelector } from 'react-redux';
import {
    currentStepSelector,
    setStep,
} from '../../storage/reducers/app.reducer';
import HdrFile from '../../webgl/scenes/room.hdr';
import MicropreparationContent from '../MicropreparationContent/MicropreparationContent';

const texts = {
    text_1: 'Избыток фиброзной ткани размещается только вокруг ветвей печеночной артерии и вены, расположенных в области портальных трактов, без образования септ.',
    text_2: 'Дополнительно из фиброзной ткани образуются\n' +
      'септы, соединительнотканные перегородки между\n' +
      'портальными трактами, располагающимися на\n' +
      'стыках печеночных долек.',
    text_3: 'Множественные порто-портальные и порто-\n' +
      'центральные септы без формирования ложных\n' +
      'печеночных долек, то есть без цирроза.',
    text_4: 'На этом этапе наблюдаются массивные порто-портальные и порто-центральные септы и\n' +
      'формируются ложные печеночные дольки.',
}

const _MainComponent = ({ selectedStep, type }) => {
    const dispatch = useDispatch();
    dispatch(setStep(selectedStep));
    const _mount = React.useRef(null);
    const _img = React.useRef(null);
    const value = useSelector(currentStepSelector);
    const indexPage = value.index;

    let img
    let text
    if (selectedStep >= 1 && selectedStep <= 4) {
        img = require(`../../assets/images/main_content_img/f${selectedStep}.jpg`);
        text = texts[`text_${selectedStep}`];
    }
    console.log(texts[`text_${selectedStep}`])
    const onPageChange = new CustomEvent('onpagechange', { detail: indexPage });
    const onTypeChange = new CustomEvent('ontypechange', { detail: type });

    useEffect(() => {
        window.dispatchEvent(onPageChange);
    }, [indexPage]);

    useEffect(() => {
        window.dispatchEvent(onTypeChange);
    }, [type]);

    useEffect(() => {
        if (_mount.current) {
            new Scene(
                _mount.current,
                selectedStep,
                type,
                _img.current,
                HdrFile
            );
        }
    }, [_mount, _img]);

    return (
        <div className="openglWrapper">
            <div id="gradientHolder"></div>
            {
                img &&
                <MicropreparationContent
                    ref={_img}
                    img={img.default}
                    text={text}
                />
            }
            <div ref={_mount} />
        </div>
    );
};

export default _MainComponent;
