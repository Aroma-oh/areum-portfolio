// styled, next import 
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
// recoil import
import { useRecoilValue } from 'recoil';
import { selectProject } from '@/recoil/atoms';
// Mui
import Carousel from 'react-material-ui-carousel';
// data
import { PROJECTS } from '@/constants/project'

export const Carouser = () => {
  const selectedProject = useRecoilValue(selectProject);

  return (
    <CarouselBox
      navButtonsAlwaysVisible={true}
      interval={3000}
      animation={"slide"}
      sx={{
        width: '60vw',
        height: 'fit-content',
      }}
    >
      {PROJECTS[selectedProject].image.map((el, idx) => (
        <div
          className='slide'
          key={idx}
        >
          <Image
            src={el}
            alt=''
            width={500}
            height={300}
          />
        </div>
      ))}
    </CarouselBox>
  )
}

const CarouselBox = styled(Carousel)`
  .slide {
    display: flex;
    justify-content: center;
    border: solid 1px; // 제거 예정
  }
  margin-bottom: 2rem;
`
