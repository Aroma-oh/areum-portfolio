// styled, hook import
import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';
// mui import
import Button from '@mui/material/Button';
// component import
import { Mountain } from '@/component/section/intro/Mountain';

const Intro = () => {
  const { handleMove } = useMoveToSection();

  return (
    <IntroBox id='Intro' >
      <ContentBox>
        <h1>문제 해결을 통해 성장하는 <br /> 프론트엔드 개발자 오아름입니다</h1>
        <Button
          variant="contained"
          size='large'
          sx={{ borderRadius: '21px' }}
          onClick={() => handleMove('Profile')}
        > 더 알아보기 👇🏻 </Button>
      </ContentBox>
      <Mountain />
    </IntroBox>
  )
}

const IntroBox = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
`

const ContentBox = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  word-break: keep-all;

  
  h1 {
    padding-top: 5%;
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    line-height: 5rem;
    text-align: center;
    margin-bottom: 10rem;
    color: inherit;
  }
  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
    text-align: center;
  }
  hr {
    width: 3rem;
    border: solid 3px #636363;
    margin-bottom: 2.5rem;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.7rem;
    margin: 0 1rem 3rem 1rem;
    word-break: keep-all;
  }
`

export default Intro;