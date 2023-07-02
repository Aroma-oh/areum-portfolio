// styled, next import 
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
// mui import
import Carousel from 'react-material-ui-carousel';

interface ProjectProps {
  nav: {
    type: string;
    name: string;
    create: string;
    period: number;
  } | undefined;
  project: {
    image: string[],
    intro: {
      title: string;
      content: string[]
    }[],
    info: {
      title: string;
      href?: string;
      content?: string;
    }[],
  } | undefined;
}

export const Carouser = ({ nav, project }: ProjectProps) => {

  return (
    <Box id='view-project'>
      <div className='title-box'>
        <h5> {nav?.name} 프로젝트</h5>
        <p> 개발기간 : {nav?.period}</p>
      </div>
      <CarouselBox
        navButtonsAlwaysVisible={true}
        interval={3000}
        animation={"slide"}
        sx={{
          width: '60vw',
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
              width={500}
              height={400}
              unoptimized={false}
            />
          </div>
        ))}
      </CarouselBox>
    </Box>

  )
}

const Box = styled.div`
  .title-box {
    text-align: center;
    margin: 2rem 0 3.5rem 0;
  }
  h5 {
    margin: 2.5rem 0 0.8rem 0;
    font-size: 1.5rem;
    font-weight: 600;
    color: #575757;
  }
  p {
    font-size: 1.2rem;
  }
`
const CarouselBox = styled(Carousel)`
  .slide {
    display: flex;
    justify-content: center;
    border: solid 1px; // 제거 예정
  }
  margin-bottom: 2rem;
`
