// styled, react import 
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
// data import 
import { FRONTEND, BACKEND, ETC } from '@/constants/skills'
// component import 
import { ProgressCircle } from '@/component/section/skill/ProgressCircle'
// type import 
import { SkillSet, OpenModalDataProps, ProgressCircleProps, SubProgressCircleProps } from '@/types/skills'
// custom hook import 
import { useMoveToSection } from '@/hooks/useMoveToSection'

const Skill = () => {

  // 상태 관리
  const [openStack, setOpenStack] = useState({
    frontend: true,
    backend: false,
    etc: false,
  });
  const [modalData, setModalData] = useState({
    stack: "",
    name: "",
    content: "",
  });
  const [openModal, setOpenModal] = useState(false);


  // 핸들러 관리
  const handleOpenStack = (stackType: string) => {
    setOpenStack(prevState => ({
      frontend: stackType === 'frontend' ? !prevState.frontend : false,
      backend: stackType === 'backend' ? !prevState.backend : false,
      etc: stackType === 'etc' ? !prevState.etc : false,
    }));
  };

  const handleOpenModal = (skills: OpenModalDataProps, stack: string) => {
    setModalData({ stack, name: skills.name, content: skills.content });
    setOpenModal(true);
  }

  const handleOffModal = () => {
    setOpenModal(false);
  }

  const { handleMove } = useMoveToSection();
  const handleMoveScroll = () => {
    if (openStack.frontend || openStack.backend || openStack.etc) {
      handleMove('skill-container')
    }
  }

  // 브라우저 사이즈 관리 코드
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

  }, []);

  // 데이터 관리
  const skills: SkillSet[] = [
    ["frontend", FRONTEND, 'bg-frontend'],
    ["backend", BACKEND, 'bg-backend'],
    ["etc", ETC, 'bg-experienced'],
  ];


  return (
    <SkillBox id='Skill' >
      <h4>Skill</h4>
      <div className='skill-container' id='skill-container'>
        <ProgressCircleBox windowWidth={windowWidth} openStack={openStack} openModal={openModal}>
          {skills.map((stack, index1) => (
            <div key={index1} className={`${stack[0]}`}>
              {stack[1].map((skill, index2) => (
                <div key={skill.name}>
                  <ProgressCircleAnimation rotation={360 / stack[1].length * index2}
                    isRotate={stack[0] === 'frontend' ? openStack.frontend : stack[0] === 'backend' ? openStack.backend : openStack.etc}
                  >
                    <ProgressCircle value={skill.value} />
                    <div
                      className={`${skill.className} skills`}
                      onMouseEnter={() => handleOpenModal(skill, stack[0])}
                      onMouseLeave={handleOffModal} />
                  </ProgressCircleAnimation>
                </div>
              ))}
              <div onClick={() => { handleOpenStack(stack[0]); handleMoveScroll(); }} className='stack-circle'>
                <ProgressCircle name={stack[0]} value={100} />
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
        <StackCardBox>
          {skills.map((skill, index) => (
            <div key={index} className='box'>
              <h5> 🛠 {skill[0]} 🛠 </h5>
              <StackCard >
                <div className={skill[2]}></div>
              </StackCard>
            </div>
          ))}
        </StackCardBox>
      </div>
    </SkillBox>
  )
}


const SkillBox = styled.section`
  position: relative;
  width: 100%;
  height: fit-content;
  padding: 7% 0 0 0 ;
  display: flex;
  flex-direction: column;

  background-color: #d5d5d52b;

  h4 {
    align-self: center;
    font-size: 2rem;
    font-weight: 500;
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
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  margin: 0 auto;
  width: 80vw;
  height: ${({ openStack }) =>
    openStack.frontend || openStack.etc ? "950px" : openStack.backend ? "600px" : "280px"};

  transition: 1.2s;
  
  .frontend {
    position: absolute;
    left: ${({ openStack }) => (openStack.frontend ? "45%" : "10%")};
    top: ${({ openStack }) => (openStack.frontend ? "450px" : "60px")};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 1.2s;
  }
  .backend {
    position: absolute;
    right: ${({ openStack }) => (openStack.backend ? "55%" : "55%")};
    top: ${({ openStack }) => (openStack.backend ? "200px" : "60px")};

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1.2s;
  }
  .etc {
    position: absolute;
    right: ${({ openStack }) => (openStack.etc ? "45%" : "20%")};
    top: ${({ openStack }) => (openStack.etc ? "450px" : "60px")};

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
    display: ${({ openModal }) => (openModal ? "" : "none")};
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
    background-color: #c6e3ff;
    border-radius: 12px;
    margin: 0 1rem;
    padding: 0.2rem 0.5rem;
    font-weight: 600;
  }
  .modal-content {
    margin: 1rem 1.5rem;
    word-break: keep-all;
  }
  .skills {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    cursor: pointer;
  }

  @media (max-width: 900px) {
    display: none
  }
`

const ProgressCircleAnimation = styled.div<SubProgressCircleProps>`
  position: absolute;
  top: 50%;
  left: 50%;
  transition: 1.2s;
  transform: 
  ${({ isRotate, rotation }) => isRotate
    ? ` rotate(${rotation}deg) translate(200px) rotate(-${rotation}deg)`
    : `rotate(0deg) translate(0px) rotate(0deg)`};
`

const StackCardBox = styled.div`
  position: relative;
  width: 60vw;
  height: fit-content;
  margin: 4rem auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h5 {
    font-size: 1.5rem;
    text-align: center;
  }

  @media (min-width: 900px) {
    display: none
  }
`

const StackCard = styled.div`
  margin: 1rem auto;
  padding:  2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: rgba(149, 160, 165, 0.2) 0px 8px 24px;

`
export default Skill;