import styled from '@emotion/styled';
import { Skills } from '@/types/skills'
import { ProgressCircle } from '@/component/common/ProgressCircle'

interface Props {
  data: Skills[]
  openFront: boolean;
  openBack: boolean;
  openEtc: boolean;
  type: string;
  handleOpenModal: (skill: Skills, stack: string) => void;
  handleOffModal: () => void;
}

export const ProgressCircles = ({ data, openFront, openBack, type, handleOpenModal, handleOffModal }: Props) => {
  return (
    <>
      {data.map((skill, index2) => (
        <div key={skill.name}>
          <ProgressChildCircle translation={openFront && skill.stack === 'frontend' ? 200 : 0} rotation={(openFront ? 52 : openBack ? 120 : 72) * index2}>
            <ProgressCircle name={skill.name} value={skill.value} />
          </ProgressChildCircle>
          <div
            className={`${skill.className} skills`}
            onMouseEnter={() => handleOpenModal(skill, skill.stack)}
            onMouseLeave={handleOffModal}
          />
        </div>
      ))}
    </>
  );
}

interface ProgressChildProps {
  translation: number;
  rotation: number;
}

const ProgressChildCircle = styled.div<ProgressChildProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: opacity 0.5s ease; 

  transform: 
    rotate(${(props) => props.rotation}deg)
    translate(${(props) => props.translation}px)
    rotate(-${(props) => props.rotation}deg);

  @media (max-width: 900px) {
    /* display: none; */
  }
`;