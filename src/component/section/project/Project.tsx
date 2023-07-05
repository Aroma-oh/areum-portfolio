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
import { ProjectType } from '@/types/project'


const Project = () => {
  const { data, isError } = useQuery<ProjectType[]>('project', () => getDbAllData<ProjectType>('project'));

  const [projectData, setProjectData] = useState<ProjectType>();

  useEffect(() => {
    data && setProjectData(data[0])
  }, [data]);

  const isHorizon = useRecoilValue(isHorizontalState);
  const selectedProject = useRecoilValue(selectProject);

  if (isError) return <div>잠시 후 다시 시도해주세요.</div>; // 스켈레톤으로 변경 예정

  return (
    <ProjectBox id='Project'>
      <h4>Project</h4>
      <div className='view-mode'>
        <ViewMode />
      </div>
      {isHorizon && <NavButton project={projectData?.project} />}
      <TextBox>
        {isHorizon
          ?
          <>
            <Carouser project={projectData?.project[selectedProject]} />
            <Content project={projectData?.project[selectedProject]} />
          </>
          :
          projectData?.project.map((el, idx) => (
            <div key={idx}>
              <Carouser project={el} />
              <Content project={el} />
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 1.5rem;

  h4 {
    margin: 3rem;
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


