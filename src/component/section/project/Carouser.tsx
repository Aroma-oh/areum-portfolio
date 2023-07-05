// styled, next import 
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
// mui import
import Carousel from 'react-material-ui-carousel';
import { ProjectList } from '@/types/project'

interface Props {
  project: ProjectList | undefined;
}[]

export const Carouser = ({ project }: Props) => {

  return (
    <Box id='view-project'>
      <div className='title-box'>
        <h5> {project?.nav.name} 프로젝트</h5>
        <p> 개발기간 : {project?.nav.period}일</p>
      </div>
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
  margin-bottom: 2rem;
  .slide {
    display: flex;
    justify-content: center;
  }
`
