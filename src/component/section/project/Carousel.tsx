// styled, next.js import 
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
// mui import
import MuiCarousel from 'react-material-ui-carousel';
// type import
import { ProjectList } from '@/types/project';

interface Props {
  project: ProjectList;
};

export const Carousel = ({ project }: Props) => {

  return (
    <CarouselBox id='view-project'>
      <p className='sub-text'>이미지에 마우스를 올리면 auto play를 멈출 수 있습니다.</p>
      <CarouselImg
        interval={4000}
        animation={"fade"}
        autoPlay={true}
        sx={{
          width: '25vw',
          height: 'fit-content',
        }}
      >
        {project.image.map((el, idx) => (
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
      </CarouselImg>
      <div className='title-box'>
        <h5> {project.nav.name} </h5>
        <p>{project.nav.type} project</p>
        {project.nav.link.map(({ title, href }, index) => (
          <div key={index} >
            <p className='title'> {title} </p>
            <a className='link' href={href} target="_blank" aria-label='프로젝트 링크'>{href}</a>
          </div>
        ))}
      </div>
    </CarouselBox>
  )

};

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
const CarouselImg = styled(MuiCarousel)`
  margin-bottom: 2rem;
  .slide {
    display: flex;
    justify-content: center;
  }
`