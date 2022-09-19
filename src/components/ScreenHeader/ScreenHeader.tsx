import {
    HeaderBackButton,
    HeaderContainer,
    HeaderInfoButton,
    Wrapper,
} from './ScreenHeader.styles';
import { ReactComponent as ChevronBack } from '../../assets/icons/svg/ChevronBack.svg';
import infoImg from '../../components/main/img/Information.svg';
import { Dispatch, SetStateAction } from 'react';

interface IMainHeaderNav {
    modalActive: boolean;
    setModalActive: Dispatch<SetStateAction<boolean>>;
}

export const ScreenHeader: React.FC<IMainHeaderNav> = ({
    modalActive,
    setModalActive,
    children,
}) => {
    const handleModalClick = () => {
        modalActive ? setModalActive(false) : setModalActive(true);
    };

    return (
        <HeaderContainer>
            <HeaderBackButton>
                <ChevronBack />
            </HeaderBackButton>
            <Wrapper>
                {children}
                <HeaderInfoButton onClick={handleModalClick}>
                    <img src={infoImg} alt="info" />
                </HeaderInfoButton>
            </Wrapper>
        </HeaderContainer>
    );
};
