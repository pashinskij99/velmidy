import React from 'react';

export interface IScreen {
    modalActive: any;
    setModalActive: any;
}

export interface IWayModel {
    id: string;
    url: string;
}

export interface IWayStepHeaderButton {
    index: number;
    Component: React.FC<IScreen>;
    infoButton: IWayStepInfoComponent;
    buttonText?: string | undefined;
    text: string;
    subText: string;
    headerComponent?: React.FC<IScreen>;
    textHeaderComponent?: string;
    subLabel?: string;
}
export interface IWayStepInfoComponent {
    Component: React.FC;
}

export interface IWayStep {
    index: number;
    model: string;
    playSoundUrl?: string;
    label: string;
    subLabel?: string;
    description?: string;
    headerButtons: IWayStepHeaderButton[];
    infoButton: IWayStepInfoComponent;
}

export interface IAppDataWay {
    type: string;
    key: string;
    models: IWayModel[];
    steps: IWayStep[];
    profile_page?: ProfilePage;
    reference?: ProfilePage;
}

export interface ProfilePage {
    Component: any
}

export interface IAppData {
    ways: IAppDataWay[];
}
