import React from 'react';
import styles from './styles.module.scss';

import { useDispatch, useSelector } from 'react-redux';
import {
    appSelector,
    currentStepSelector,
    setModelType,
    setStep,
    waySelector,
} from '../../storage/reducers/app.reducer';
import { Description, FooterButton, Tools, SubLabel, BorderBlock, FooterButtonWrapper } from './MainFooter.styles';
import { PlayButton } from '../PlayMusicBtn/PlayMusicBtn';

export const MainFooter: React.FC<{ graphicModalActive?: boolean }> = ({
    graphicModalActive,
}) => {
    const app = useSelector(appSelector);
    const way = useSelector(waySelector);
    const step = useSelector(currentStepSelector);
    const dispatch = useDispatch();

    const handleStepChange = (value: number): void => {
        if (step && step.index !== value) {
            dispatch(setModelType('liver'));
            dispatch(setStep(value));
        }
    };

    const urls = way!.steps.map((item) => item.playSoundUrl);

    if (way)
        return (
            <footer className={styles.footer}>
                {/*<PlayButton urls={urls} active={graphicModalActive} />*/}
                <nav className={styles.footerNav}>
                    <Tools>
                        {way.steps.map((item, i) => (
                            <FooterButton
                                id='footer-items'
                                className={i === 0 ? 'tutorial tutorial-footer-button' : ''}
                                key={item.index}
                                onClick={() => handleStepChange(item.index)}
                                index={item.index}
                                step={step}
                            >
                                <FooterButtonWrapper
                                  id='footer-item-wrapper'
                                  index={item.index}
                                  step={step}
                                >
                                    <span
                                    >
                                    {item.label}
                                </span>
                                    {item.subLabel ? (
                                      <SubLabel>
                                          {item.subLabel}
                                      </SubLabel>
                                    ) : null}
                                    {item.description ? (
                                      <Description>
                                          {item.description}
                                      </Description>
                                    ) : null}
                                    <BorderBlock
                                      id='border-block'
                                      index={item.index}
                                      step={step}
                                    ></BorderBlock>
                                </FooterButtonWrapper>
                            </FooterButton>
                        ))}
                    </Tools>
                </nav>
            </footer>
        );
    else return null;
};
