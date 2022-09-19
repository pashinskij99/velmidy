import React, { useState } from 'react';
import styles from './styles.module.scss';
import MainHeaderNav from '../MainHeaderNav/MainHeaderNav';
import { MainFooter } from '../MainFooter/MainFooter';
import MainContent from '../../components/MainContent/MainContent';
import { useSelector } from 'react-redux';
import {
    appSelector,
    currentStepSelector,
} from '../../storage/reducers/app.reducer';
import { Popup } from '../Popup/Popup';
import { Sidebar } from '../Sidebar/Sidebar';
import { Screen1 } from '../../pages/Screen1/Screen1';
import { SidebarContent1 } from '../SidebarContent/SidebarContent1';
import { SidebarContent2 } from '../SidebarContent/SidebarContent2';
import { SidebarContent3 } from '../SidebarContent/SidebarContent3';
import { SidebarContent4 } from '../SidebarContent/SidebarContent4';
import TutorialButton from '../TutorialButton/TutorialButton';

interface IProps {
    type?: string;
    selectedStep?: number;
}

const Main: React.FC<IProps> = () => {
    const app = useSelector(appSelector);
    const step = useSelector(currentStepSelector);
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [graphicModalActive, setGraphicModalActive] =
        useState<boolean>(false);
    const [profileActive, setProfileActive] = useState<boolean>(false)
    const [referenceActive, setReferenceActive] = useState<boolean>(false)
    const type = app.selectedModelType;

    // console.log(app.data.ways[0].profile_page.Component)
    const way1 = app.data.ways[0]

    let sidebarContent;
    if (app.selectedStep === 0) sidebarContent = <SidebarContent1 />;
    if (app.selectedStep === 1 || app.selectedStep === 2)
        sidebarContent = <SidebarContent2 />;
    if (app.selectedStep === 3) sidebarContent = <SidebarContent3 />;
    if (app.selectedStep === 4 || app.selectedStep === 5)
        sidebarContent = <SidebarContent4 />;

    let modalContent;
    let profileContent;

    if (step && way1.profile_page && profileActive) {
        profileContent = (
          <way1.profile_page.Component />
        )
    }

    if (step && way1.reference && referenceActive) {
        profileContent = (
          <way1.reference.Component />
        )
    }

    if (step && !graphicModalActive) {
        modalContent = (
          <Popup active={modalActive} setActive={setModalActive}>
              <step.infoButton.Component />
          </Popup>
        )
    }
    if (step && graphicModalActive) {
        modalContent = (
            <step.infoButton.Component/>
        )
    }
    if (app.selectedWay)
        return (
            <div className={styles.container}>
                <MainHeaderNav
                    modalActive={modalActive}
                    setModalActive={setModalActive}
                    graphicModalActive={graphicModalActive}
                    profileActive={profileActive}
                    setGraphicModalActive={setGraphicModalActive}
                    setProfileActive={setProfileActive}
                    setReferenceActive={setReferenceActive}
                    referenceActive={referenceActive}
                />
                {app.selectedGraphic ? (
                    <app.selectedGraphic.Component
                        //@ts-ignore 1235
                        modalActive={graphicModalActive}
                        setModalActive={setGraphicModalActive}
                    />
                ) : null}
                {app.selectedModelType === 'cube' && step!.index < 6 ? (
                    <Sidebar>{sidebarContent}</Sidebar>
                ) : null}
                {modalActive ? modalContent : null}
                {profileContent ? profileContent : null}
                <MainContent selectedStep={app.selectedStep} type={type} />
                <MainFooter graphicModalActive={graphicModalActive} />
                <TutorialButton />
            </div>
        );
    return <Screen1 />;
};

export default Main;
