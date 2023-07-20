// styled, hook import
import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';
// mui import
// import Button from '@mui/material/Button';
// component import
import { Mountain } from '@/component/section/intro/Mountain';
import { Button } from '@/component/common/Button';


const Intro = () => {
  const { handleMove } = useMoveToSection();

  return (
    <IntroBox id='Intro' >
      <ContentBox>
        <h1>문제 해결을 통해 성장하는 <br /> 프론트엔드 개발자 오아름입니다</h1>
        <Button onClick={() => handleMove('Profile')} />
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
  height: 50vh;
  margin: 30vh 0 25vh 0;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;

  word-break: keep-all;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    line-height: 6rem;

    text-align: center;
    color: black;

    /* &::before {
    content: '문제 해결을 통해 성장하는';
    position: absolute;

    overflow: hidden;
    border-right: 1px solid black;
    animation: typing 5s steps(31) infinite;
    color: black;
  } */
  }

  @keyframes typing{
    0% {
      width: 0%;
    }
    50% {
      width: 100%;
    }
    100% {
      width: 0%;
    }
  }
`

export default Intro;