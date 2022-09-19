import React from 'react';
import { MicroContent, MicroWrapper } from './MicropreparationContent.styles';

interface IMicro {
  img: string
  ref: React.Ref<HTMLImageElement>
  text: string
}

const MicropreparationContent : React.FC<IMicro> = ({ img, ref, text }) => {
  return (
    <MicroWrapper className="tutorial tutorial-micro">
      <img ref={ref} src={img} alt="img"/>
      <MicroContent>
        {text}
      </MicroContent>
    </MicroWrapper>
  );
};

export default MicropreparationContent;