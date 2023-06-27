import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';

const Project = () => {
  const { sectionRef } = useMoveToSection();

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