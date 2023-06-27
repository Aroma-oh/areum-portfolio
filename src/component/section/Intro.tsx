import styled from '@emotion/styled';
import { useScroll } from '@/hooks/useScroll';

const Intro = () => {
  const { sectionRef } = useScroll();

  return (
    <IntroBox id='Intro' ref={sectionRef}>
      아름 포트폴리오
    </IntroBox>
  )
}

const IntroBox = styled.section`
  width: 100%;
  height: 500px;
  background-color: aqua;
`

export default Intro;