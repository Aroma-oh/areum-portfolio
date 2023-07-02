// styled, next import 
import styled from '@emotion/styled';
import Image from 'next/legacy/image';
// Mui
import Carousel from 'react-material-ui-carousel';

interface Props {
  data: {
    nav: object;
    image: string[];
  }
}

export const Carouser = ({ data }: Props) => {
  const { nav, image } = data;

  return (
    <div>
      <CarouselBox
        navButtonsAlwaysVisible={true}
        interval={3000}
        animation={"slide"}
        sx={{
          width: '60vw',
          height: 'fit-content',
        }}
      >
        {image.map((el, idx) => (
          <div
            className='slide'
            key={idx}
          >
            <Image
              src={el}
              alt=''
              width={500}
              height={300}
              unoptimized={false}
            />
          </div>
        ))}
      </CarouselBox>
    </div>

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
