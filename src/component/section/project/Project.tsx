// react, styled import 
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
// recoil import
import { useRecoilValue } from 'recoil';
import { isHorizontalState } from '@/recoil/atoms';
import { selectProject } from '@/recoil/atoms';
// react-query import
import { useQuery } from 'react-query';
// component import 
import { ViewMode } from '@/component/section/project/ViewMode';
import { NavButton } from '@/component/section/project/NavButton';
import { Carouser } from '@/component/section/project/Carouser';
import { Content } from '@/component/section/project/Content';
// firebase, type import 
import { getDbAllData } from '@/util/firebase';
import { ProjectNav, ProjectList } from '@/types/project'


interface ProjectData {
  nav: ProjectNav[],
  project: ProjectList[],
}[]

const Project = () => {
  const { data } = useQuery<ProjectData[], Error>('project', () => getDbAllData<ProjectData>('project'));

  const [projectData, setProjectData] = useState<ProjectData>()

  useEffect(() => {
    data && setProjectData(data[0])
  }, data)

  const isHorizon = useRecoilValue(isHorizontalState);
  const selectedProject = useRecoilValue(selectProject);


  return (
    <ProjectBox id='Project'>
      <h4>Project</h4>
      <div className='view-mode'>
        <ViewMode />
      </div>
      {isHorizon === true && <NavButton navData={projectData?.nav} />}
      <TextBox>
        {isHorizon === true
          ?
          <>
            <Carouser nav={projectData?.nav[selectedProject]} project={projectData?.project[selectedProject]} />
            <Content project={projectData?.project[selectedProject]} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin: 3rem;
    padding-left: 1.5rem;
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


