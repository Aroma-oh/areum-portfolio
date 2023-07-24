// styled, react, next.js import 
import styled from '@emotion/styled';
import { memo } from 'react';
import Image from 'next/legacy/image';
// mui import
import MuiCarousel from 'react-material-ui-carousel';
// custom hook import
import { useMoveToSection } from '@/hooks/useMoveToSection';
// type import
import { ProjectList } from '@/types/project'


interface Props {
  project: ProjectList;
};

export const Detail = memo(({ project }: Props) => {
  const { handleMove } = useMoveToSection();

  return (
    <DetailBox
      id='detail'
      onClick={() => {
        handleMove('project');
      }}>
      <CarouselBox id='view-project'>
        <p className='sub-text'>이미지에 마우스를 올리면 auto play를 멈출 수 있습니다.</p>
        <Carousel
          interval={3000}
          animation={"fade"}
          autoPlay={true}
          sx={{
            width: '25vw',
            height: 'fit-content',
          }}
        >
          {project?.image.map((el, idx) => (
            <div
              className='slide'
              key={idx}
            >
              <Image
                src={el}
                alt=''
                width={700}
                height={400}
              />
            </div>
          ))}
        </Carousel>
        <div className='title-box'>
          <h5> {project?.nav.name} </h5>
          <p>{project?.nav.type} project</p>
          {project?.nav.link.map(({ title, href }, index) => (
            <div key={index} >
              <p className='title'> {title} </p>
              <a className='link' href={href} target="_blank" aria-label='프로젝트 링크'>{href}</a>
            </div>
          ))}
        </div>
      </CarouselBox>
      <ContentBox>
        <div className='intro'>
          {project?.intro.map(({ title, content }, idx) => (
            <div key={idx}>
              <h5>{title}</h5>
              {content.map((paragraph, idx) => (
                <div key={`${idx} content`} className='content'>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='info'>
          {project?.info.map(({ title, href, content }, idx) => (
            <div key={idx} className='info-box'>
              <h6>{title}</h6>
              <div className='info-text'>{content}</div>
            </div>
          ))}
        </div>
      </ContentBox>
    </DetailBox>
  );
});

const DetailBox = styled.section`
  width: 99vw;
  height: 100vh;
  font-family: 'SUIT-Regular';
  
  display: flex;
  justify-content: center;
  align-items: center;
`

const CarouselBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
  width: 32vw;

  .title-box {
    line-height: 1.4rem;
    h5 {
      display: inline;
      font-size: 1.5rem;
      font-weight: 600;
      color: #000000c8;
    }
    p:nth-child(2) {
      display: inline;
      color: #565656;
    }
    div:nth-child(3) {
      padding-top: 1.4rem;
    }
    .title {
      width: fit-content;
      background-color: #eaeaeaaf;
      border-radius: 10px;
      padding: 0 6px;
      margin: 8px 0;
      text-align: center;
    }
    .link {
      text-decoration: none;
      word-break: break-all;
      text-decoration: none;
      color: #676767;
    }
  }
  .sub-text {
    margin: 2rem 0;
    text-align: center;
    word-break: keep-all;
    color: #888888;
    font-size: 1rem;
  }

`
const Carousel = styled(MuiCarousel)`
  margin-bottom: 2rem;
  .slide {
    display: flex;
    justify-content: center;
  }
`

const ContentBox = styled.div`
  width: 35vw;
  margin-left: 5rem;  

  h5 {
    margin: 2rem 0 0.8rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #000000c8;
    width: fit-content;

    background-image: linear-gradient(90deg, #95DAC1, #fffd7f);
    background-position: bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
  p, .info-text {
    color: #565656;
    line-height: 1.3rem;
    word-break: break-all;
  }
  .info {
    margin-top: 1.8rem;
  }
  h6 {
    font-size: 1rem;
    font-weight: 600;
    color: #000000c8;
    margin: 0.8rem 0;
    width: fit-content;

    background-image: linear-gradient(90deg, #95DAC1, #fffd7f5a);
    background-position: bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
  @media (max-width: 900px) {
    width: 70vw;
    .info-box {
      flex-direction: column;
    }
    h6 {
      margin: 0.5rem 0;
      width: 100%;
    }
    a, .info-text { 
      width: 70vw;
      line-height: 1.3rem;
    }
  }
`
