import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { IAppData, IWayStepHeaderButton } from '../types/app.types';
import { Screen6 } from '../../pages/Screen6/Screen6';
import { Screen7 } from '../../pages/Screen7/Screen7';
import { Screen10 } from '../../pages/Screen10/Screen10';
import { Screen12 } from '../../pages/Screen12/Screen12';
import { Screen15 } from '../../pages/Screen15/Screen15';
import { Screen23 } from './../../pages/Screen23/Screen23';
import { Step6Info } from '../../components/PopupContent/Step6Info/Step6Info';
import { Screen10Info } from '../../components/PopupContent/Screen10Info/Screen10Info';
import { Screen11Info } from '../../components/PopupContent/Screen11Info/Screen11Info';
import { Screen9Info } from '../../components/PopupContent/Screen9Info/Screen9Info';
import { Screen8Info } from '../../components/PopupContent/Screen8Info/Screen8Info';
import { Screen5Info } from '../../components/PopupContent/Screen5Info/Screen5Info';
import { Screen4Info } from '../../components/PopupContent/Screen4Info/Screen4Info';
import { Screen3Info } from '../../components/PopupContent/Screen3Info/Screen3Info';
import { Screen2Info } from '../../components/PopupContent/Screen2Info/Screen2Info';
import { Screen2_C_Info } from '../../components/PopupContent/Screen2_C_Info/Screen2_C_Info';
import { Screen6_C } from '../../pages/Screen6_C/Screen6_C';
import { Screen1_C_Info } from '../../components/PopupContent/Screen1_C_Info/Screen1_C_Info';
import { Screen4_C_Info } from '../../components/PopupContent/Screen4_C_Info/Screen4_C_Info';
import { Screen5_C_Info } from '../../components/PopupContent/Screen5_C_Info/Screen5_C_Info';
import { Screen24 } from '../../pages/Screen24/Screen24';
import { Screen16 } from '../../pages/Screen16/Screen16';
import { Screen5 } from '../../pages/Screen5/Screen5';
import { Screen4 } from '../../pages/Screen4/Screen4';

const initialData: IAppData = {
    ways: [
        {
            type: 'Гепатит В',
            key: 'b',
            models: [
                {
                    id: 'm0',
                    url: 'model1.glb',
                },
                {
                    id: 'm1',
                    url: 'model2.glb',
                },
                {
                    id: 'm2',
                    url: 'model3.glb',
                },
                {
                    id: 'm3',
                    url: 'model4.glb',
                },
                {
                    id: 'm4',
                    url: 'model5.glb',
                },
                {
                    id: 'm5',
                    url: 'model6.glb',
                },
                {
                    id: 'm6',
                    url: 'model7.glb',
                },
                {
                    id: 'm7',
                    url: 'model8.glb',
                },
            ],
            steps: [
                {
                    index: 0,
                    model: 'm0',
                    playSoundUrl:
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                    headerButtons: [],
                    infoButton: {
                        Component: Screen2Info,
                    },
                    label: 'Отсуствие фиброза',
                    subLabel: 'F0 \n',
                },
                {
                    index: 1,
                    model: 'm0',
                    playSoundUrl:
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                    headerButtons: [
                        {
                            index: 0,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при умеренном фиброзе',
                            buttonText:
                                'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',
                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                        {
                            index: 1,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при выраженном фиброзе',
                            Component: Screen7,
                            infoButton: {
                                Component: Screen24,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen3Info,
                    },
                    label: 'Слабый фиброз ',
                    subLabel: 'F1 \n',
                },
                {
                    index: 2,
                    model: 'm0',
                    headerButtons: [
                        {
                            index: 0,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при умеренном фиброзе',
                            buttonText:
                                'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',
                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                        {
                            index: 1,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при выраженном фиброзе ',
                            Component: Screen7,
                            infoButton: {
                                Component: Screen24,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen4Info,
                    },
                    label: 'Умеренный фиброз',
                    subLabel: 'F2 \n',
                },
                {
                    index: 3,
                    model: 'm0',
                    playSoundUrl:
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                    headerButtons: [
                        {
                            index: 0,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при умеренном фиброзе',
                            buttonText:
                                'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',

                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                        {
                            index: 1,
                            text:
                                'Подробнее про исследование TAF\n',
                            subText: 'при выраженном  фиброзе',
                            Component: Screen7,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen5Info,
                    },
                    label: 'Выраженный Фиброз',
                    subLabel: 'F3 \n',
                },
                {
                    index: 4,
                    model: 'm0',
                    headerButtons: [],
                    infoButton: {
                        Component: Screen8Info,
                    },
                    label: 'Цирроз',
                    subLabel: 'F4',
                },
                {
                    index: 5,
                    model: 'm0',
                    headerButtons: [
                        {
                            index: 1,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при декомпенсации ',
                            Component: Screen10,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen9Info,
                    },
                    label: 'Декомпенсация',
                    description: '(F4, Классы В и С по ЧП)',
                },
                {
                    index: 6,
                    model: 'm0',
                    playSoundUrl:
                        'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
                    headerButtons: [
                        {
                            index: 0,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при гепато-целлюлярной карциноме ',
                            Component: Screen12,
                            infoButton: {
                                Component: Step6Info,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen11Info,
                    },
                    label: 'Гепато-целлюлярная карцинома',
                },
                {
                    index: 7,
                    model: 'm0',
                    headerButtons: [
                        {
                            index: 0,
                            text: 'Подробнее про терапию\n',
                            subText: 'ДО и ПОСЛЕ ОТП',
                            buttonText:
                                'Подробнее про терапию\n' + 'ДО и ПОСЛЕ ОТП \n',
                            // Component: Screen15,
                            Component: Screen16,
                            headerComponent: Screen15,
                            textHeaderComponent: 'Подробнее про исследование\n' +
                              'TAF при декомпенсации',
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                        {
                            index: 1,
                            text:
                                'Подробнее про исследование TAF\n',
                            subText: 'при декомпенсации',
                            buttonText:
                                'Подробнее про исследование\n' +
                                'TAF при декомпенсации',

                            Component: Screen15,
                            headerComponent: Screen16,
                            textHeaderComponent : 'Подробнее про терапию\n' + 'ДО и ПОСЛЕ ОТП \n',
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen10Info,
                    },
                    label: 'Трансплантация',
                },
            ],
            profile_page: {
                Component: Screen5,
            },
            reference: {
                Component: Screen4,
            }
        },
        {
            type: 'Гепатит C',
            key: 'c',
            models: [
                {
                    id: 'm0',
                    url: 'model1.glb',
                },
                {
                    id: 'm1',
                    url: 'model2.glb',
                },
                {
                    id: 'm2',
                    url: 'model3.glb',
                },
                {
                    id: 'm3',
                    url: 'model4.glb',
                },
                {
                    id: 'm4',
                    url: 'model5.glb',
                },
                {
                    id: 'm5',
                    url: 'model6.glb',
                },
                {
                    id: 'm6',
                    url: 'model7.glb',
                },
                {
                    id: 'm7',
                    url: 'model8.glb',
                },
            ],
            steps: [
                {
                    index: 0,
                    model: 'm0',
                    playSoundUrl:
                      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
                    headerButtons: [
                        {
                            index: 0,
                            text:
                            'Подробнее про исследование TAF',
                            subText: 'при компенсированном заболевании (F0-F4)',
                            buttonText:
                              'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',

                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                        {
                            index: 1,
                            text:
                              'Подробнее про исследование TAF',
                            subText: 'при декомпенсированном циррозе (F4)',
                            buttonText:
                              'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',

                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        }
                    ],
                    infoButton: {
                        Component: Screen1_C_Info,
                    },
                    label: 'F0 \n' + ' ' + ' Отсуствие фиброза',
                },
                {
                    index: 1,
                    model: 'm0',
                    playSoundUrl:
                      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                    headerButtons: [
                        {
                            index: 0,
                            text:
                            'Подробнее про исследование TAF\n',
                            subText: 'при слабом фиброзе',
                            buttonText:
                              'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',

                            Component: Screen6_C,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen2_C_Info,
                    },
                    label: 'F1 \n Слабый фиброз ',
                },
                {
                    index: 2,
                    model: 'm0',
                    headerButtons: [
                        {
                            index: 0,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при умеренном фиброзе',
                            buttonText:
                              'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',
                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        }
                    ],
                    infoButton: {
                        Component: Screen4_C_Info,
                    },
                    label: 'F2 \n Умеренный фиброз',
                },
                {
                    index: 3,
                    model: 'm0',
                    playSoundUrl:
                      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
                    headerButtons: [
                        {
                            index: 0,
                            text:
                              'Подробнее про исследование TAF\n',
                            subText: 'при выраженном  фиброзе',
                            buttonText:
                              'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',
                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen5_C_Info,
                    },
                    label: 'F3 \n Выраженный Фиброз',
                },
                {
                    index: 4,
                    model: 'm0',
                    headerButtons: [
                        {
                            index: 0,
                            text:
                              'Подробнее про исследование TAF\n',
                            subText: 'при компенсированном заболевании (F0-F4)',
                            buttonText:
                              'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',
                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                        {
                            index: 0,
                            text:
                              'Подробнее про исследование TAF\n',
                            subText: 'при декомпенсированном циррозе (F4)\n',
                            buttonText:
                              'Вирусологическая супрессия и нормализация уровня ALT через 5 лет',
                            Component: Screen6,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen8Info,
                    },
                    label: ' F4' + '\n Цирроз ',
                },
                {
                    index: 5,
                    model: 'm0',
                    headerButtons: [
                        {
                            index: 1,
                            text:
                              'Подробнее про исследование TAF\n',
                            subText: 'при декомпенсации реальной практике',
                            Component: Screen10,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen9Info,
                    },
                    label: 'Декомпенсация',
                    description: '(F4, Классы В и С по ЧП)',
                },
                {
                    index: 6,
                    model: 'm0',
                    playSoundUrl:
                      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
                    headerButtons: [
                        {
                            index: 0,
                            text:
                              'Подробнее про исследование TAF\n',
                            subText: 'при гепато-целлюлярной карциноме',
                            Component: Screen12,
                            infoButton: {
                                Component: Step6Info,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen11Info,
                    },
                    label: 'Гепато-целлюлярная карцинома',
                },
                {
                    index: 7,
                    model: 'm0',
                    headerButtons: [
                        {
                            index: 0,
                            text: 'Подробнее про терапию\n' + 'ДО и ПОСЛЕ ОТП',
                            buttonText:
                              'Подробнее про терапию\n',
                            subText: 'ДО и ПОСЛЕ ОТП \n',
                            Component: Screen15,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                        {
                            index: 1,
                            text: 'Подробнее про исследование TAF\n',
                            subText: 'при декомпенсации \n',
                            buttonText:
                              'Подробнее про исследование\n' +
                              'TAF при декомпенсации',

                            Component: Screen10,
                            infoButton: {
                                Component: Screen23,
                            },
                        },
                    ],
                    infoButton: {
                        Component: Screen10Info,
                    },
                    label: 'Трансплантация',
                },
            ],
        },
    ],
};

export interface IAppState {
    data: IAppData;
    loaded: boolean;
    selectedStep: number;
    selectedWay?: string;
    selectedGraphic: IWayStepHeaderButton | null;
    selectedModelType?: string;
    playing: boolean;
}

const targetStep = process.env.REACT_APP_PAGE?.includes('step')
    ? +process.env.REACT_APP_PAGE!.replace('step', '')
    : 0;

console.log(process.env.REACT_APP_PAGE);

const initialState: IAppState = {
    loaded: false,
    selectedStep: targetStep,
    selectedGraphic: null,
    selectedModelType: 'liver',
    playing: false,
    data: initialData,
};

export const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setLoadedValue: (state, action: PayloadAction<boolean>): void => {
            state.loaded = action.payload;
        },
        setWay: (state, action: PayloadAction<string>): void => {
            state.selectedWay = action.payload;
        },
        setStep: (state, action: PayloadAction<number>): void => {
            state.selectedStep = action.payload;
        },
        setSelectedGraphic: (
            state,
            action: PayloadAction<IWayStepHeaderButton | null>
        ) => {
            state.selectedGraphic = action.payload;
        },
        setModelType: (state, action: PayloadAction<string>): void => {
            state.selectedModelType = action.payload;
        },
        setPlaying: (state, action: PayloadAction<boolean>) => {
            state.playing = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const $app_actions = appSlice.actions;

export const appSelector = (state: RootState): IAppState => state.app;
export const waySelector = createSelector(appSelector, (app) => {
    return app.data.ways.find((way) => way.key === app.selectedWay);
});
export const currentStepSelector = createSelector(
    [appSelector, waySelector],
    (app, way) => {
        return way?.steps[app.selectedStep];
    }
);

export default appSlice.reducer;

export const { setWay, setStep, setSelectedGraphic, setModelType, setPlaying } =
    appSlice.actions;
