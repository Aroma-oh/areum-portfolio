import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { FRONTEND, BACKEND, ETC } from '@/constants/skills'
import { ProgressCircle } from '@/component/common/ProgressCircle'
import { ViewSkills } from '@/component/common/ViewSkills'

const Skill = () => {
  const [openFront, setOpenFront] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [openEtc, setOpenEtc] = useState(false);

  // useEffect(() => {
  //   setOpenFront(true);
  // }, []);

  const handleOpenFront = () => {
    setOpenFront(!openFront)
    setOpenBack(false)
    setOpenEtc(false)
    console.log('오픈')
  }

  const handleOpenBack = () => {
    setOpenFront(false)
    setOpenBack(!openBack)
    setOpenEtc(false)
  }

  const handleOpenEtc = () => {
    setOpenFront(false)
    setOpenBack(false)
    setOpenEtc(!openEtc)
  }

  return (
    <SkillBox id='Skill' >
      <h4>Skill</h4>
      <div className='skill-container'>
        <div className={`frontend-box ${openFront ? 'open' : ''}`} >
          <ProgressCircle value={100} className='frontend' name='Frontend' onClick={handleOpenFront} />
          <div className={`skills-box${openFront ? 'open' : ''}`}>
            {ViewSkills({ data: FRONTEND, translation: 190, rotation: 52 })}
          </div>
        </div>
        <div className='backend-box'>
          <ProgressCircle value={100} className='backend' name='Backend' onClick={handleOpenBack} />
        </div>
        <div className='etc-box'>
          <ProgressCircle value={100} className='etc' name='ETC' onClick={handleOpenEtc} />
        </div>
      </div>
    </SkillBox>
  )
}

const SkillBox = styled.section`
  position: relative;

  height: 1000px;
  padding: 7% 2.5% 0 2.5%;
  display: flex;
  flex-direction: column;

  background-color: #d5d5d52b;

  h4 {
    align-self: center;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
  .skill-container {
    display: flex;
    justify-content: center;
  }
  .frontend-box, .backend-box, .etc-box {
    margin: 0 4rem;
    cursor: pointer;
  }
  .frontend-box.open {
    opacity: 1;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 0.5s ease;
  }
  .skills-box {
    display: none;
  }
`


export default Skill;