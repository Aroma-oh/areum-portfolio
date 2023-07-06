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
  const { handleMove } = useMoveToSection();
  const [openFront, setOpenFront] = useState(true);
  const [openBack, setOpenBack] = useState(false);
  const [openEtc, setOpenEtc] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({
    stack: "",
    name: "",
    content: "",
  })

  // 핸들러 관리
  const handleOpenFront = () => {
    setOpenFront(!openFront)
    setOpenBack(false)
    setOpenEtc(false)
    setOpenModal(false)
  }

  const handleOpenBack = () => {
    setOpenFront(false)
    setOpenBack(!openBack)
    setOpenEtc(false)
    setOpenModal(false)
  }

  const handleOpenEtc = () => {
    setOpenFront(false)
    setOpenBack(false)
    setOpenEtc(!openEtc)
    setOpenModal(false)
  }

  const handleOpenModal = (skills: OpenModalDataProps, stack: string) => {
    setModalData({ stack, name: skills.name, content: skills.content });
    setOpenModal(true);
  }

  const handleOffModal = () => {
    setOpenModal(false);
  }

  const handleMoveScroll = () => {
    if (openFront || openBack || openEtc) {
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
    ["frontend", FRONTEND, handleOpenFront, 'bg-frontend'],
    ["backend", BACKEND, handleOpenBack, 'bg-backend'],
    ["etc", ETC, handleOpenEtc, 'bg-experienced'],
  ];

  return (
    <SkillBox id='Skill' >
      <h4>Skill</h4>
      <div className='skill-container' id='skill-container'>
        <ProgressCircleBox windowWidth={windowWidth} openFront={openFront} openBack={openBack} openEtc={openEtc} openModal={openModal}>
          {skills.map((stack, index1) => (
            <div key={index1} className={`${stack[0]}`}>
              {stack[1].map((skill, index2) => (
                <div key={skill.name}>
                  <SubProgressCircle rotation={360 / stack[1].length * index2}
                    isRotate={stack[0] === 'frontend' ? openFront : stack[0] === 'backend' ? openBack : openEtc}
                  >
                    <ProgressCircle value={skill.value} />
                    <div
                      className={`${skill.className} skills`}
                      onMouseEnter={() => handleOpenModal(skill, stack[0])}
                      onMouseLeave={handleOffModal} />
                  </SubProgressCircle>
                </div>
              ))}
              <div onClick={() => { stack[2](); handleMoveScroll(); }} className='stack-circle'>
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
                <div className={skill[3]}></div>
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
  height: ${(props) =>
    props.openFront || props.openEtc ? "950px" : props.openBack ? "600px" : "280px"};

  transition: 1.2s;
  
  .frontend {
    position: absolute;
    left: ${(props) => (props.openFront ? "45%" : "10%")};
    top: ${(props) => (props.openFront ? "450px" : "60px")};

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 1.2s;
  }
  .backend {
    position: absolute;
    right: ${(props) => (props.openBack ? "55%" : "55%")};
    top: ${(props) => (props.openBack ? "200px" : "60px")};

    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1.2s;
  }
  .etc {
    position: absolute;
    right: ${(props) => (props.openEtc ? "45%" : "20%")};
    top: ${(props) => (props.openEtc ? "450px" : "60px")};

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
    display: ${(props) => (props.openModal ? "" : "none")};
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

const SubProgressCircle = styled.div<SubProgressCircleProps>`
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