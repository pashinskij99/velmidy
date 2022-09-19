import { useEffect, useState } from 'react';
import { Container, Dots, Item, SliderButton, Tools } from './Slider.styles';
import { ReactComponent as Back } from '../../assets/images/svg/Slide-prev.svg';
import { ReactComponent as Next } from '../../assets/images/svg/Slide-next.svg';

interface ISlider {
    content: JSX.Element[];
    updateInfo?: (activeSlide: number) => void;
    startingSlide: number;
    isProfile?: boolean;
}

export const Slider: React.FC<ISlider> = ({
    content,
    updateInfo,
    startingSlide,
    isProfile
}) => {
    const [activeSlide, setActiveSlide] = useState<number>(startingSlide);
    const count = content.length;

    const handlePrev = () => {
        if (activeSlide > 0) setActiveSlide(activeSlide - 1);
    };

    const handleNext = () => {
        if (activeSlide < count - 1) setActiveSlide(activeSlide + 1);
    };

    const isProfilePage = (activeSlide : number, isProfile : boolean | undefined) => {
        if (isProfile) {
            if (activeSlide === 0) {
                return (
                  <Tools>
                      <SliderButton
                        onClick={handleNext}
                        disabled={activeSlide === count - 1}
                      >
                          <Next />
                      </SliderButton>
                  </Tools>
                )
            } else if (activeSlide === count - 1) {
                return (
                  <Tools>
                      <SliderButton
                        isProfile={isProfile}
                        onClick={handlePrev}
                        disabled={activeSlide === 0}
                      >
                          <Back />
                      </SliderButton>
                  </Tools>
                )
            }
        } else {
          return (
            <Tools>
              <SliderButton
                onClick={handlePrev}
                disabled={activeSlide === 0}
              >
                  <Back />
              </SliderButton>
              {
                !isProfile && content.map((item, i) => {
                   return <Dots active={activeSlide === i} />
                })
              }
              <SliderButton
                onClick={handleNext}
                disabled={activeSlide === count - 1}
              >
                <Next />
              </SliderButton>
            </Tools>
          )
        }

    }

    useEffect(() => {
        if (updateInfo) updateInfo(activeSlide);
    }, [activeSlide]);

    return (
        <div>
            <Container>
                {content.map((item) => (
                    <Item
                        key={content.indexOf(item)}
                        index={content.indexOf(item)}
                        activeSlide={activeSlide}
                    >
                        {item}
                    </Item>
                ))}
            </Container>
            {
              isProfilePage(activeSlide, isProfile)
            }
        </div>
    );
};
