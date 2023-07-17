// styled, hook import
import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';
// image import
import Image from "next/legacy/image";
import bgImage from '/public/intro.jpg';
// mui import
import Button from '@mui/material/Button';
// 인터렉션 페이지 테스트중
import { WaveCanvas } from '@/component/section/Wave';

const Intro = () => {
  const { handleMove } = useMoveToSection();

  return (
    <IntroBox id='Intro' >
      {/* <WaveCanvas /> */}
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
        <h2>프론트엔드 포트폴리오</h2>
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
  height: 80vh;
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

  word-break: keep-all;

  
  h1 {
    font-size: 3rem;
    font-weight: 700;
    letter-spacing: 0.8rem;
    margin-bottom: 0.9rem;
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