// styled, next import 
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
// mui import
import MuiCarousel from 'react-material-ui-carousel';
// type import
import { ProjectList } from '@/types/project'

interface Props {
  project: ProjectList | undefined;
}[]

export const Carousel = ({ project }: Props) => {

  return (
    <Box id='view-project'>
      <div className='title-box'>
        <h5> {project?.nav.name} 프로젝트</h5>
        <p> 개발기간 : {project?.nav.period}일</p>
      </div>
      <p className='sub-text'>이미지에 마우스를 올리면 auto play를 멈출 수 있습니다.</p>
      <CarouselBox
        navButtonsAlwaysVisible={true}
        interval={3000}
        animation={"slide"}
        autoPlay={true}
        sx={{
          width: '70vw',
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
      </CarouselBox>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title-box {
    text-align: center;
    margin: 2rem 0 3.5rem 0;
  }
  .sub-text {
    margin: 2rem 1rem;
    text-align: center;
    word-break: keep-all;
    color: #888888;
    font-size: 1rem;
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
const CarouselBox = styled(MuiCarousel)`
  margin-bottom: 2rem;
  .slide {
    display: flex;
    justify-content: center;
  }
`
