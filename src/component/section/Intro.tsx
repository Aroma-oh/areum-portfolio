import styled from '@emotion/styled';
import { useScroll } from '@/hooks/useScroll';
import Image from "next/image";
import bgImage from '/public/intro.jpg';

const Intro = () => {
  const { sectionRef } = useScroll();

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
        <div className='text'>
          <h1>오아름</h1>
          <h4>프론트엔드 포트폴리오</h4>
        </div>
      </ContentBox>
      <hr style={{ border: 'solid', width: '50%' }} />
    </IntroBox>
  )
}

const IntroBox = styled.section`
  top: -10px;
  width: 100%;
  height: 500px;
  position: relative;
`

const ContentBox = styled.div`
  z-index: 1;
  .text {
    position: absolute;
    text-align: center;
    top: 150px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`

export default Intro;