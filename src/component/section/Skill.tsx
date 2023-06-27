import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';

const Skill = () => {
  const { sectionRef } = useMoveToSection();

  return (
    <SkillBox id='Skill' ref={sectionRef}>
      Skill
    </SkillBox>
  )
}

const SkillBox = styled.section`
    height: 500px;
    background-color: white;
`

export default Skill;