import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { currentStepSelector } from '../../storage/reducers/app.reducer';
import { ReactComponent as Pause } from '../../assets/icons/svg/Pause.svg';
import { ReactComponent as Play } from '../../assets/icons/svg/Play.svg';
import {
    StyledPlayButton,
    StyledPlayButtonWrapper,
} from './PlayMusicBtn.styles';

const useMultiAudio = (urls: any) => {
    const currentStep = useSelector(currentStepSelector);
    const [sources] = useState(
        urls.map((url: string) => {
            return {
                url,
                audio: new Audio(url),
            };
        })
    );

    const [players, setPlayers] = useState(
        urls.map((url: any) => {
            return {
                url,
                playing: false,
            };
        })
    );

    const toggle = (targetIndex: number) => () => {
        const newPlayers = [...players];
        const currentIndex = players.findIndex((p: any) => p.playing === true);
        if (currentIndex !== -1 && currentIndex !== targetIndex) {
            newPlayers[currentIndex].playing = false;
            newPlayers[targetIndex].playing = true;
        } else if (currentIndex !== -1) {
            newPlayers[targetIndex].playing = false;
        } else {
            newPlayers[targetIndex].playing = true;
        }
        setPlayers(newPlayers);
    };

    useEffect(() => {
        sources.forEach((source: any, i: number) => {
            players[i].playing ? source.audio.play() : source.audio.pause();
        });
    }, [sources, players]);

    useEffect(() => {
        sources.forEach((source: any, i: any) => {
            source.audio.addEventListener('ended', () => {
                const newPlayers = [...players];
                newPlayers[i].playing = false;
                setPlayers(newPlayers);
            });
        });
        return () => {
            sources.forEach((source: any, i: any) => {
                source.audio.removeEventListener('ended', () => {
                    const newPlayers = [...players];
                    newPlayers[i].playing = false;
                    setPlayers(newPlayers);
                });
            });
        };
    }, []);

    useEffect(() => {
        if (players.find((player: any) => player.playing)) {
            const newPlayers = players.map((player: any) => {
                if (player.url === currentStep!.playSoundUrl)
                    return { ...player, playing: true };
                if (player.url !== currentStep!.playSoundUrl)
                    return { ...player, playing: false };
            });
            setPlayers(newPlayers);
        }
    }, [currentStep]);

    return [players, toggle];
};

export const PlayButton: React.FC<any> = ({ urls, active }) => {
    const [players, toggle] = useMultiAudio(urls);
    const currentStep = useSelector(currentStepSelector);

    return (
        <Player
            key={currentStep!.index}
            player={players[currentStep!.index]}
            toggle={toggle(currentStep!.index)}
            active={active}
        />
    );
};

const Player: React.FC<any> = ({ player, toggle, active }) => (
    <StyledPlayButtonWrapper active={active}>
        <StyledPlayButton onClick={toggle}>
            {player.playing ? <Pause /> : <Play />}
        </StyledPlayButton>
    </StyledPlayButtonWrapper>
);
