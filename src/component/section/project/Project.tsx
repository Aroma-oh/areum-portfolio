// styled import 
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
// type import 
import { ProjectNav, ProjectList } from '@/types/project'

interface ProjectProps {
  ssrData: {
    nav: ProjectNav[],
    project: ProjectList[],
  }[]
}

const Project = ({ ssrData }: ProjectProps) => {
  const isHorizon = useRecoilValue(isHorizontalState);
  const selectedProject = useRecoilValue(selectProject);
  const { nav, project } = ssrData[0];

  return (
    <ProjectBox id='Project'>
      <h4>Project</h4>
      <div className='view-mode'>
        <ViewMode />
      </div>
      {isHorizon === true && <NavButton navData={nav} />}
      <TextBox>
        {isHorizon === true
          ?
          <>
            <Carouser nav={nav[selectedProject]} project={project[selectedProject]} />
            <Content project={project[selectedProject]} />
          </>
          :
          // 세로모드 데이터 전달 방안 고민 필요
          // nav.map((el, idx) => (
          //   <div key={idx}>
          //     <Carouser nav={el[idx]} />
          //     <Content ssrData={ssrData} />
          //   </div>
          // ))
          null
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


