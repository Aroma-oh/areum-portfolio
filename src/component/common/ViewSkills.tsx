import styled from '@emotion/styled';
import { Skills } from '@/types/skills'
import { ProgressCircle } from '../common/ProgressCircle'

interface FrontendProps {
  data: Skills[];
  translation: number;
  rotation: number;
}
export const ViewSkills = ({ data, translation, rotation }: FrontendProps) => {
  if (!data) {
    return null;
  }

  return data.map((el, index) => (
    <ProgressChildCircle
      key={el.name}
      translation={translation}
      rotation={index * rotation}
    >
      <ProgressCircle
        value={el.value}
        className='circle'
        name={el.name}
      />
    </ProgressChildCircle>
  ));
};

interface ProgressChildProps {
  translation: number;
  rotation: number;
}

const ProgressChildCircle = styled.div<ProgressChildProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
    rotate(${(props) => props.rotation}deg)
    translate(${(props) => props.translation}px)
    rotate(-${(props) => props.rotation}deg);
  transition: opacity 0.5s ease; 
`;