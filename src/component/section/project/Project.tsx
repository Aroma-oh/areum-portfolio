// styled, react import 
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
// recoil import
import { useRecoilValue, useRecoilState } from 'recoil';
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
  const selectedProject = useRecoilValue(selectProject);

  // 데이터 관리를 위한 코드
  const { data, isError } = useQuery<ProjectType[]>('project', () => getDbAllData<ProjectType>('project'));

  const [projectData, setProjectData] = useState<ProjectType>();

  useEffect(() => {
    data && setProjectData(data[0]);
  }, [data]);

  // 반응형을 위한 코드
  const [isHorizon, setIsHorizon] = useRecoilState(isHorizontalState);
  const [windowWidth, setWindowWidth] = useState(1024);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
  }, [windowWidth]);

  useEffect(() => {
    setIsHorizon(window.innerWidth > 600 ? true : false);
  }, [windowWidth]);

  if (isError) return (
    <LoadingBox >
      <ReactLoading type='bubbles' color='#1876d1' height='10vh' width='10vw' />
    </LoadingBox>
  )

  return (
    <ProjectBox id='Project'>
      <h4>Project</h4>
      <div className='view-mode'>
        {isHorizon && <ViewMode />}
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

const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  height: 400px;
  width: 100%;
`

const ProjectBox = styled.section`
  position: relative;
  height: fit-content; 

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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


