// styled import
import styled from '@emotion/styled';
// react import
import { useState, MouseEvent, useRef } from 'react';
// next import
import Image from 'next/legacy/image';
// react-query import
import { useQuery } from 'react-query';
// firebase, type import 
import { getDbAllData } from '@/util/firebase';
import { ProjectType } from '@/types/project'

export const EffectBox = () => {
  const [isMouseEnter, setIseMouseEnter] = useState(false);
  const [boxData, setBoxData] = useState({
    left: 0,
    top: 0,
    centerX: 0,
    centerY: 0,
    d: 0,
  })

  // 데이터 관리를 위한 코드
  const { data, isError } = useQuery<ProjectType[]>('project', () => getDbAllData<ProjectType>('project'));
  console.log(data);

  const rectRef = useRef<HTMLDivElement>(null);
  const frame = rectRef.current;

  const onMouseMove = (e: MouseEvent) => {

    if (!frame || !isMouseEnter) return;

    let { x, y, width, height } = frame.getBoundingClientRect();

    const left = e.clientX - x;
    const top = e.clientY - y;
    const centerX = left - width / 2;
    const centerY = top - height / 2;
    const d = Math.sqrt(centerX ** 2 + centerY ** 2);

    setBoxData({ left, top, centerX, centerY, d });
  };

  const handleMouseEnter = () => {
    setIseMouseEnter(true);
  };
  const handleMouseLeave = () => {
    setIseMouseEnter(false);
    setBoxData({
      left: 0,
      top: 0,
      centerX: 0,
      centerY: 0,
      d: 0,
    });
  };

  if (isError || !data) return (
    <></>
  )

  return (
    <Frame ref={rectRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={onMouseMove}>
      {data[0].project.map((el, index) => (
        <Box boxData={boxData}>
          <Light boxData={boxData} />
          <Image
            src={el.mainImage}
            alt='프로젝트 이미지'
            className='image'
            width={400}
            height={250}
          />
          <div className='header'>
            <h6>{el.nav.name}</h6>
            <p>{el.nav.type} project</p>
          </div>
          <div className='content'>
            <p>
              프론트엔드 취업을 위한 포트폴리오 프로젝트입니다. 스크롤 이벤트, 옵저버, 마우스 이벤트를 사용하여 인터렉션 페이지를 개발하였습니다.
            </p>
            <div>Stack</div>
            <p>
              Next.js, Recoil, React-query, Firebase, Styled-component
            </p>
          </div>
        </Box>
      ))}

    </Frame>
  )
};

const Frame = styled.div`
  width: 100vw;
  height: 90vh;
  position: relative;

  transition: transform 200ms;

  display: flex;
  justify-content: center;
  align-items: center;


`;

interface BoxProps {
  boxData: {
    left: number;
    top: number;
    centerX: number;
    centerY: number;
    d: number;
  };
}
const Box = styled.div<BoxProps>`
  width: 300px;
  height: 450px;
  margin: 0 3vw;
  position: relative;

  font-family: 'SUIT-Regular';

  border-radius: 3%;
  background-color: white;
  box-shadow: ${({ boxData }) => `${-boxData.centerX / 15}px ${-boxData.centerY / 15}px 20px 1px rgba(0, 0, 0, 0.08)`};

  transform: ${({ boxData }) =>
    `rotate3d(${-boxData.centerY / 100}, ${boxData.centerX / 100},0, ${-boxData.d / 15}deg)`};
  
  transition: transform 250ms box-shadow 250ms ease-out;

  .image {
    height:fit-content;
    width:fit-content;
    border-radius: 3% 3% 50% 50%;
  }

  .header {
    padding: 1.9rem 1.4rem 1.5rem 1.4rem;

    h6 {
      display: inline;
      font-size: 1.8rem;
      font-weight: 600;
      margin-right: 8px; 
      color: #000000c8;
    }
    p {
      display: inline;
      color: #565656;
    }
  }

  .content {
    padding: 0 1.4rem;
    div {
      font-size: 0.95rem;
      background-color: #eaeaeaaf;
      width:fit-content;
      padding: 3px 6px;
      margin-bottom: 6px;
      border-radius: 8px;
    }
    p {
      font-size: 0.95rem;
      line-height: 1.2rem;
      color: #565656;
      margin-bottom: 0.8rem;
    }
  }
  `;

const Light = styled.div<BoxProps>`
  position: absolute;
  z-index: -1;
  
  width: 100%;
  height: 100%;
  border-radius: 3%;

  background: ${({ boxData }) =>
    `radial-gradient(circle at ${boxData.left}px ${boxData.top}px, #00000010, #ffffff, #ffffff60)`};

`;