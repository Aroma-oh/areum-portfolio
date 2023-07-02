// react, styled import 
import styled from '@emotion/styled';
// recoil import
import { useRecoilValue } from 'recoil';
import { isHorizontalState } from '@/recoil/atoms';
import { selectProject } from '@/recoil/atoms';
// component import 
import { ViewMode } from '@/component/section/project/ViewMode';
import { NavButton } from '@/component/section/project/NavButton';
import { Carouser } from '@/component/section/project/Carouser';
import { Content } from '@/component/section/project/Content';
// data
import { PROJECTS } from '@/constants/project'


const Project = () => {
  const isHorizon = useRecoilValue(isHorizontalState);
  const selectedProject = useRecoilValue(selectProject);


  return (
    <ProjectBox id='Project'>
      <h4>Project</h4>
      <div className='view-mode'>
        <ViewMode />
      </div>
      {isHorizon === true && <NavButton />}
      <TextBox>
        {isHorizon === true
          ?
          <>
            <Carouser data={PROJECTS[selectedProject]} />
            <Content data={PROJECTS[selectedProject]} />
          </>
          :
          PROJECTS.map((project, idx) => (
            <div key={idx}>
              <Carouser data={project} />
              <Content data={project} />
            </div>
          ))
        }
      </TextBox>
    </ProjectBox>
  )
}

const ProjectBox = styled.section`
  position: relative;
  height: fit-content; 
  padding: 2.5% 2.5% 2.5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin-bottom: 3rem;
    align-self: center;
    font-size: 2rem;
    font-weight: 500;
  }
  .view-mode {
    margin-bottom: 1rem;
  }
`

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;
`

export default Project;