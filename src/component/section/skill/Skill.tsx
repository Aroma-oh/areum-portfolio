// styled, react import 
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
// data import 
import { FRONTEND, BACKEND, ETC } from '@/constants/skills';
// component import 
import { ProgressCircle } from '@/component/section/skill/ProgressCircle';
import { SubButton } from '@/component/common/SubButton';
// custom hook import
import { useMoveToSection } from '@/hooks/useMoveToSection';
// type import 
import { SkillSet, OpenModalDataProps, ProgressCircleProps, CircleAnimationProps } from '@/types/skills';
// observer library import 
import { useInView } from 'react-intersection-observer';

const Skill = () => {
  const { handleMove } = useMoveToSection();

  // 상태 관리
  const [openStack, setOpenStack] = useState({
    frontend: false,
    backend: false,
    etc: false,
  });
  const [modalData, setModalData] = useState({
    stack: '',
    name: '',
    content: '',
  });
  const [openModal, setOpenModal] = useState(false);
  const [lastOpenStack, setLastOpenStack] = useState('frontend');

  // 핸들러 관리
  const handleOpenStack = (stackType: string) => {
    setOpenStack(prevState => ({
      frontend: stackType === 'frontend' ? !prevState.frontend : false,
      backend: stackType === 'backend' ? !prevState.backend : false,
      etc: stackType === 'etc' ? !prevState.etc : false,
    }));
    setLastOpenStack(stackType); // 이전에 선택한 스택을 기억하여 요소 관측시 오픈하기 위한 sate
  };

  const handleModal = (isOpen: boolean, skills?: OpenModalDataProps, stack?: string) => {
    if (isOpen && skills && stack) {
      setModalData({ stack, name: skills.name, content: skills.content });
    }
    setOpenModal(isOpen);
  }
  // 스택 오픈 옵저버 이벤트
  const { ref, inView } = useInView({ threshold: 0.35, delay: 500, trackVisibility: true });

  useEffect(() => {
    if (inView) {
      handleOpenStack(lastOpenStack);
    }
    return () => {
      setOpenStack({
        frontend: false,
        backend: false,
        etc: false,
      });
    };
  }, [inView]);

  // 데이터 관리
  const skills: SkillSet[] = [
    ["frontend", FRONTEND, 'bg-frontend'],
    ["backend", BACKEND, 'bg-backend'],
    ["etc", ETC, 'bg-experienced'],
  ];

  return (
    <SkillBox id='skill' >
      <div className='skill-container' id='skill-container'>
        <ProgressCircleBox openStack={openStack} openModal={openModal} ref={ref}>
          {skills.map((stack, index1) => (
            <div key={index1} className={`${stack[0]}`}>
              {stack[1].map((skill, index2) => (
                <div key={skill.name}>
                  <CircleAnimation rotation={360 / stack[1].length * index2}
                    isRotate={stack[0] === 'frontend' ? openStack.frontend : stack[0] === 'backend' ? openStack.backend : openStack.etc}
                  >
                    <ProgressCircle value={skill.value} open={stack[0] === 'frontend' ? openStack.frontend : stack[0] === 'backend' ? openStack.backend : openStack.etc} />
                    <div
                      className={`${skill.className} skills`}
                      onMouseEnter={() => handleModal(true, skill, stack[0])}
                      onMouseLeave={() => handleModal(false)} />
                  </CircleAnimation>
                </div>
              ))}
              <div onClick={() => handleOpenStack(stack[0])} className='stack-circle'>
                <ProgressCircle name={stack[0]} value={100} open={false} />
              </div>
              {modalData.stack === stack[0] && (
                <Card className='modal'>
                  <div className='modal-name'>{modalData.name}</div>
                  <div className='modal-content'>{modalData.content}</div>
                </Card>
              )}
            </div>
          ))}
        </ProgressCircleBox>

        <div className='button'>
          <SubButton onClick={() => handleMove('project')} />
        </div>
      </div>
    </SkillBox>
  )
}


const SkillBox = styled.section`
  position: relative;

  width: 100%;
  min-height: 100vh;

  .skill-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;
`

const ProgressCircleBox = styled.div<ProgressCircleProps>`
  position: relative;
  margin: auto;

  width: 70vw;
  height: 86vh;
  transition: 1.2s;

  font-family: 'SUIT-Regular';
  
  .frontend {
    position: absolute;
    left: ${({ openStack }) => (openStack.frontend ? '40vw' : '0vw')};
    top: ${({ openStack }) => (openStack.frontend ? '37vh' : '16vh')};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 1.2s;
  }
  .backend {
    position: absolute;
    left: ${({ openStack }) => (openStack.backend ? '40vw' : '0vw')};
    top: ${({ openStack }) => (openStack.backend ? '37vh' : '37vh')};

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1.2s;
  }
  .etc {
    position: absolute;
    left: ${({ openStack }) => (openStack.etc ? '40vw' : '0vw')};
    top: ${({ openStack }) => (openStack.etc ? '37vh' : '58vh')};

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1.2s;
    position: absolute;
  }
  .stack-circle {
    background-color: white;
    position: absolute;
    top: 12%;
    left: 12%;
    z-index: 10;
    cursor: pointer;
    border-radius: 50%;
  }
  .modal {
    display: ${({ openModal }) => (openModal ? '' : 'none')};
    position: absolute;
    width: 200px;
    height: 150px;

    left: 50%;
    top: 50%;
    transform: translate(-17%, -10%);

    background-color: white;
    border-radius: 8px;
    box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;

    z-index: 10;
  }
  .modal-name {
    width: fit-content;
    background-color: #eaeaeaaf;
    border-radius: 12px;
    margin: 0 1rem;
    padding: 0.2rem 0.5rem;
    font-weight: 600;
    font-size: 0.95rem;
  }
  .modal-content {
    margin: 1rem 1.5rem;
    word-break: keep-all;
    line-height: 1.3rem;
    font-size: 0.9rem;
  }
  .skills {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;
  }
`

const CircleAnimation = styled.div<CircleAnimationProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 1.2s;
  transform: 
  ${({ isRotate, rotation }) => isRotate
    ? ` rotate(${rotation}deg) translate(200px) rotate(-${rotation}deg)`
    : `rotate(0deg) translate(0px) `};
`

export default Skill;