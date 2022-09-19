import React, { Dispatch, SetStateAction, useEffect } from 'react';
import styles from './styles.module.scss';
import clsx from 'clsx';
// import infoImg from '../main/img/Information.svg';
// import referenceImg from '../main/img/reference.svg';
// import profileImg from '../main/img/profile.svg';
import arrow_right_icon from '../../assets/icons/svg/arrow-right.svg';
import { useDispatch, useSelector } from 'react-redux';
import { rem } from '../../utils/rem';
import {
    appSelector,
    currentStepSelector,
    setModelType,
    setSelectedGraphic,
} from '../../storage/reducers/app.reducer';
import {
  HeaderBackButton, HeaderBackButtonSmall,
  HeaderButton,
  HeaderLeftButton,
} from './MainHeaderNav.styles';
// import { ReactComponent as ChevronBack } from '../../assets/icons/svg/ChevronBack.svg';
// import { ReactComponent as BloodCell } from '../../assets/icons/svg/BloodCell.svg';
import { HeaderLargeButton } from '../ScreenHeader/ScreenHeader.styles';
import { IScreen } from '../../storage/types/app.types';
import background2 from '../../assets/images/background/header-background2.svg'
import background3 from '../../assets/images/background/header-background3.svg'
import background4 from '../../assets/images/background/header-background4.svg'
import background5 from '../../assets/images/background/header-background5.svg'
import background6 from '../../assets/images/background/header-background6.svg'
import background7 from '../../assets/images/background/header-background7.svg'
import background8 from '../../assets/images/background/header-background8.svg'

interface IMainHeaderNav {
    modalActive: boolean;
    setModalActive: Dispatch<SetStateAction<boolean>>;
    graphicModalActive: boolean;
    setGraphicModalActive: Dispatch<SetStateAction<boolean>>;
    profileActive: boolean
    setProfileActive: Dispatch<SetStateAction<boolean>>;
    selectedStep?: any;
    referenceActive: boolean;
    setReferenceActive: Dispatch<SetStateAction<boolean>>;
    type?: string;
}

const changeHeaderForMain = (modelType : string | undefined) => {
    switch (modelType) {
      case 'liver' :
        return background2
        break;
      case 'cube' :
        return background3
        break
      // default :
      //   return background2
      //   break
    }
}

const changeHeaderForModal = (selectedGraphic : any, graphicModalActive : boolean) => {
  const inModal = selectedGraphic && graphicModalActive === false

  switch (inModal) {
    case true :
      return background4
      break
    case false :
      return background5
      break
  }
}

const MainHeaderNav: React.FC<IMainHeaderNav> = ({
    modalActive,
    setModalActive,
    graphicModalActive,
    profileActive,
    setGraphicModalActive,
    setProfileActive,
    referenceActive,
    setReferenceActive
}) => {
    const app = useSelector(appSelector);
    const selectedStep = app.selectedStep;
    const dispatch = useDispatch();
    const step = useSelector(currentStepSelector);
    const modelType = app.selectedModelType;

    const handleHeaderButtonClick = (
        index: number,
        component: React.FC<IScreen>,
        text: string,
        subText: string,
        buttonText: string,
        Component: React.FC,
        headerComponent?: React.FC<IScreen>,
        textHeaderComponent?: string,
    ): void => {
        // console.log(app.selectedGraphic && app.selectedGraphic.index === index, '1')
        app.selectedGraphic && app.selectedGraphic.index === index
            ? dispatch(setSelectedGraphic(null))
            : dispatch(
                  setSelectedGraphic({
                      index: index,
                      Component: component,
                      text: text,
                      subText: subText,
                      headerComponent: headerComponent,
                      textHeaderComponent: textHeaderComponent,
                      buttonText: buttonText,
                      infoButton: {
                          Component: Component,
                      },
                  })
              );
    };

    const handleCloseGraphic = () => {
        dispatch(setSelectedGraphic(null));
        setGraphicModalActive(false)
        setProfileActive(false)
        setReferenceActive(false)
    };

    const handleProfilePage = () => {
      setReferenceActive(false)
      setProfileActive(!profileActive)
    }

    const handleReferencePage = () => {
      setProfileActive(false)
      setReferenceActive(!referenceActive)
    }

    const handleClosePopup = () => {
        setGraphicModalActive(false)
    }

    const handleOpenLiver = () => {
        dispatch(setModelType('liver'));
    };

    const handleOpenCube = () => {
        dispatch(setModelType('cube'));
    };

    const handleModalClick = () => {
        modalActive ? setModalActive(false) : setModalActive(true);
    };

    const handleGraphicModalClick = () => {
        graphicModalActive
            ? setGraphicModalActive(false)
            : setGraphicModalActive(true);
    };

    let headerButtons;

    if (selectedStep) {
      headerButtons = step!.headerButtons.map((item, i) => (
            <HeaderButton
                className={i === 1 ? clsx('tutorial', 'tutorial-right-buttons')  : null}
                key={item.index}
                onClick={() =>
                    handleHeaderButtonClick(
                        item.index,
                        item.Component,
                        item.text,
                        item.subText,
                        item.buttonText!,
                        item.infoButton.Component,
                        item.headerComponent,
                        item.textHeaderComponent,
                    )
                }
            >

                <div>{item.text}</div>
                <img src={arrow_right_icon} alt="arrow"/>
            </HeaderButton>
        ));
    }

    let renderedHeaderButtons;
    let renderedHeaderButtonsInGraphic;

    if (app.selectedGraphic && app.selectedGraphic.buttonText) {
      renderedHeaderButtonsInGraphic =
        step!.index > 5 ? (
          <HeaderButton
            onClick={() => handleHeaderButtonClick(
              app.selectedGraphic!.index,
              app.selectedGraphic!.Component,
              app.selectedGraphic!.text,
              app.selectedGraphic!.subText,
              app.selectedGraphic!.buttonText!,
              app.selectedGraphic!.infoButton.Component,
              app.selectedGraphic!.headerComponent,
              app.selectedGraphic!.textHeaderComponent,
            )}
            active={app.selectedGraphic.index}
          >
            <div>{app.selectedGraphic.textHeaderComponent}</div>
            <img src={arrow_right_icon} alt="arrow"/>
          </HeaderButton>
        ) : (
          <HeaderLargeButton>
            <div>{app.selectedGraphic.buttonText}</div>
            <img src={arrow_right_icon} alt="arrow"/>
          </HeaderLargeButton>
        );
    } else {
      renderedHeaderButtonsInGraphic = null
    }

    if (app.selectedGraphic && app.selectedGraphic.buttonText) {
        renderedHeaderButtons =
            step!.index > 5 ? (
                <HeaderButton>
                    <div>{app.selectedGraphic.buttonText}</div>
                    <img src={arrow_right_icon} alt="arrow"/>
                </HeaderButton>
            ) : (
                <HeaderLargeButton>
                    <div>{app.selectedGraphic.buttonText}</div>
                    <img src={arrow_right_icon} alt="arrow"/>
                </HeaderLargeButton>
            );
    }
    else if (!app.selectedGraphic) renderedHeaderButtons = headerButtons;
    else renderedHeaderButtons = null;

    return (
        <header
            className={
                !graphicModalActive
                    ? styles.header
                    : `${styles.header} + ${styles.header_hidden}`
            }
        >
            <div className={styles.header_background}>
              {
                (app.selectedGraphic !== null && !profileActive && !referenceActive) || (graphicModalActive && !profileActive) || (graphicModalActive && !referenceActive)
                ? (
                  <img src={changeHeaderForModal(app.selectedGraphic, graphicModalActive)} alt=""/>
                ) :
                null
              }
              {
                (app.selectedGraphic === null && !profileActive && !referenceActive) || (!app.selectedGraphic && graphicModalActive && !profileActive && !referenceActive)
                ? <img src={changeHeaderForMain(modelType)} alt="background"/>
                : null
              }
              {
                profileActive && <img src={background7} alt="background"/>
              }
              {
                referenceActive && <img src={background8} alt="background"/>
              }
              <img className="header-tutorial" src={background6} alt="background"/>
            </div>

          {app.selectedGraphic || graphicModalActive || profileActive || referenceActive ? (
              <HeaderBackButtonSmall onClick={graphicModalActive ? handleClosePopup : handleCloseGraphic}>
                {/*<ChevronBack />*/}
              </HeaderBackButtonSmall>
            ) :
            <HeaderBackButton onClick={handleCloseGraphic}>
              {/*<ChevronBack />*/}
            </HeaderBackButton>
          }
          {modelType === 'liver' &&
            !app.selectedGraphic && !profileActive && !referenceActive ? (
                <HeaderLeftButton className="tutorial tutorial-left-button" onClick={step!.index < 6 ? handleOpenCube : null}>
                </HeaderLeftButton>
            ) : null}
          {modelType === 'cube' && !app.selectedGraphic && !profileActive && !referenceActive && step!.index < 6 ? (
                <HeaderBackButton className="tutorial tutorial-left-button" onClick={handleOpenLiver}>
                </HeaderBackButton>
            ) : null}
          {

          }
          {
            !referenceActive &&
            <div className={styles.wrapper}>
              {step!.index === 7 && renderedHeaderButtonsInGraphic}
              <button
                style={{ height: rem(90), width: rem(90) }}
                data-tooltip="Профиль пациента, краткая инструкция по препарату и ссылки на источники"
                className={
                  clsx(
                    styles.btnInfo,
                    'main-nav-btn-info',
                    'tutorial tutorial-profile',
                    // app.selectedGraphic && graphicModalActive === false ? 'active' : ''
                  )
                }
                onClick={handleProfilePage}
              >
              </button>
              <button
                style={{ height: rem(85), width: rem(85) }}
                className={
                  clsx(
                    styles.btnInfo,
                    'main-nav-btn-info',
                    // app.selectedGraphic && graphicModalActive === false ? 'active' : ''
                  )
                }
                onClick={handleReferencePage}
              >
              </button>
              {
                graphicModalActive
                  ? null
                  : <button
                    style={{ height: rem(85), width: rem(85) }}
                    className={
                      clsx(
                        styles.btnInfo,
                        'main-nav-btn-info',
                        // app.selectedGraphic && graphicModalActive === false ? 'active' : ''
                      )
                    }
                    onClick={
                      app.selectedGraphic
                        ? handleGraphicModalClick
                        : handleModalClick
                    }
                  >
                    {/*{app.selectedGraphic && graphicModalActive === false ? <img src={infoImg} alt="info"/> : null}*/}
                  </button>
              }
            </div>
          }
          <div className={styles.more_about_research}>
            {
              app.selectedGraphic || profileActive || referenceActive
                ? null
                : renderedHeaderButtons
            }
          </div>
        </header>
    );
};

export default MainHeaderNav;