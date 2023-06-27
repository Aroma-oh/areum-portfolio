import styled from '@emotion/styled';
import { useScroll } from '@/hooks/useScroll';

const Skill = () => {
  const { sectionRef } = useScroll();

  return (
    <SkillBox id='Skill' ref={sectionRef}>
      Skill
    </SkillBox>
  )
}

const SkillBox = styled.section`
    height: 500px;
    background-color: #ff00b7a1;
`

export default Skill;