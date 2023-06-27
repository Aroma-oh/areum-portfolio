// styled, hook import
import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';
// Image import
import Image from "next/image";
import bgImage from '/public/intro.jpg';
// MUI import
import Button from '@mui/material/Button';

const Intro = () => {
  const { sectionRef, handleMove } = useMoveToSection();

  return (
    <IntroBox id='Intro' ref={sectionRef}>
      <Image
        src={bgImage}
        alt='배경 이미지 - 노트북이 있는 책상'
        layout='fill'
        placeholder='blur'
        objectFit='cover'
        objectPosition='center'
      />
      <ContentBox>
        <h1>오아름</h1>
        <h4>프론트엔드 포트폴리오</h4>
        <hr />
        <p>
          안녕하세요, <br />
          문제를 즐기는 프론트엔드 개발자입니다. <br />
          일상에서 마주한 불편함으로 더 나은 사용자 경험을 고민합니다. <br />
        </p>
        <Button
          variant="contained"
          size='large'
          sx={{ borderRadius: '21px' }}
          onClick={() => handleMove('Profile')}
        > 더 알아보기 👇🏻 </Button>
      </ContentBox>
    </IntroBox>
  )
}

const IntroBox = styled.section`
  position: relative;
  width: 100%;
  height: 550px;
`

const ContentBox = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  padding-top: 30px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;

  color: #363441;
  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    margin-bottom: 0.8rem;
    color: inherit;
  }
  h4 {
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.5rem;
  }
  hr {
    width: 3rem;
    border: solid 3px #636363;
    margin-bottom: 2.5rem;
  }
  p {
    font-size: 1.2rem;
    text-align: center;
    line-height: 1.5rem;
    margin-bottom: 3rem;
  }
`

export default Intro;