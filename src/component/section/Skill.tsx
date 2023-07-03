import styled from '@emotion/styled';
import { useState } from 'react';
import { FRONTEND, BACKEND, ETC } from '@/constants/skills'
import { ProgressCircle } from '@/component/common/ProgressCircle'
import { SkillSet } from '@/types/skills'
const Skill = () => {
  // 상태 관리
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

  interface ModalDataProps {
    stack: string;
    name: string;
    content: string;
  }

  const handleOpenModal = (skills: ModalDataProps, stack: string) => {
    setModalData({ stack, name: skills.name, content: skills.content });
    setOpenModal(true);
  }

  const handleOffModal = () => {
    setOpenModal(false);
  }

  // 데이터 관리
  const skills: SkillSet[] = [
    ["frontend", FRONTEND, handleOpenFront],
    ["backend", BACKEND, handleOpenBack],
    ["etc", ETC, handleOpenEtc],
  ];

  return (
    <SkillBox id='Skill' >
      <h4>Skill</h4>
      <div className='skill-container'>
        <ProgressCircleBox openFront={openFront} openBack={openBack} openEtc={openEtc} openModal={openModal}>
          {skills.map((stack, index1) => (
            <div key={index1} className={stack[0]}>
              {stack[1].map((skill, index2) => (
                <div key={skill.name}>
                  {
                    skill.stack === 'frontend' &&
                    <FrontCircle translation={200} rotation={45 * index2} openFront={openFront}>
                      <ProgressCircle value={skill.value} />
                      {openFront && <div
                        className={`${skill.className} skills`}
                        onMouseEnter={() => handleOpenModal(skill, stack[0])}
                        onMouseLeave={handleOffModal} />}
                    </FrontCircle>
                  }
                  {
                    skill.stack === 'backend' &&
                    <BackCircle translation={200} rotation={60 * index2} openBack={openBack}>
                      <ProgressCircle value={skill.value} />
                      {openBack && <div
                        className={`${skill.className} skills`}
                        onMouseEnter={() => handleOpenModal(skill, stack[0])}
                        onMouseLeave={handleOffModal} />}
                    </BackCircle>
                  }
                  {
                    skill.stack === 'etc' &&
                    <EtcCircle translation={200} rotation={72 * index2} openEtc={openEtc}>
                      <ProgressCircle value={skill.value} />
                      {openEtc && <div
                        className={`${skill.className} skills`}
                        onMouseEnter={() => handleOpenModal(skill, stack[0])}
                        onMouseLeave={handleOffModal} />}
                    </EtcCircle>
                  }

                </div>
              ))}
              <div onClick={stack[2]} className='stack-circle'>
                <ProgressCircle name={stack[0]} value={100} />
              </div>
              {modalData.stack === stack[0] && (
                <Card className='modal'>
                  <div>{modalData.name}</div>
                  <div>{modalData.content}</div>
                </Card>
              )}
            </div>
          ))}
        </ProgressCircleBox>
      </div>
    </SkillBox>
  )
}

const SkillBox = styled.section`
  position: relative;
  width: 100vw;
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

interface ProgressCircleProps {
  openFront: boolean;
  openBack: boolean;
  openEtc: boolean;
  openModal: boolean;

}

const ProgressCircleBox = styled.div<ProgressCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  width: 80vw;
  margin: 0 auto;
  
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
    right: ${(props) => (props.openBack ? "45%" : "55%")};
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
  }
  .stack-circle {
    position: absolute;
    top: 12%;
    left: 12%;
  }
  .modal {
    display: ${(props) => (props.openModal ? "" : "none")};
    position: absolute;
    width: 250px;
    height: 200px;
  }
  .skills {
    position: absolute;
    bottom: 20%;
    left: 20%;
    z-index: 4;
  }

  @media (max-width: 900px) {
    /* display: none; */
  }
`

interface SubProgressCircleProps {
  translation: number;
  rotation: number;
}

const SubProgressCircle = styled.div<SubProgressCircleProps>`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: 
    rotate(${(props) => props.rotation}deg)
    translate(${(props) => props.translation}px)
    rotate(-${(props) => props.rotation}deg);

  @media (max-width: 900px) {
    /* display: none; */
  }
`;

interface StackProps {
  openFront?: boolean;
  openBack?: boolean;
  openEtc?: boolean;
}
const FrontCircle = styled(SubProgressCircle) <StackProps>`
  transform: ${(props) => !props.openFront && "rotate(0deg) translate(0px) rotate(-0deg)"}
`
const BackCircle = styled(SubProgressCircle) <StackProps>`
  transform: ${(props) => !props.openBack && "rotate(0deg) translate(0px) rotate(-0deg)"}
`
const EtcCircle = styled(SubProgressCircle) <StackProps>`
  transform: ${(props) => !props.openEtc && "rotate(0deg) translate(0px) rotate(-0deg)"}
`


export default Skill;