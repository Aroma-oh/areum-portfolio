import styled from '@emotion/styled';
import { useScroll } from '@/hooks/useScroll';

const Project = () => {
  const { sectionRef } = useScroll();

  return (
    <ProjectBox id='Project' ref={sectionRef}>
      Project
    </ProjectBox>
  )
}

const ProjectBox = styled.section`
    height: 500px;
    background-color: #00d0ff;
`

export default Project;