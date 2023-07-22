// styled, react import 
import styled from '@emotion/styled';
import { useState, useRef, MouseEvent } from 'react';
import ReactLoading from 'react-loading';
// react-query import
import { useQuery } from 'react-query';
// next import
import Image from 'next/legacy/image';
// firebase, type import 
import { getDbAllData } from '@/util/firebase';
import { ProjectType } from '@/types/project'

const Project = () => {
  // 상태 관리
  const [isMouseEnter, setIseMouseEnter] = useState(false);
  const [boxData, setBoxData] = useState({
    left: 0,
    top: 0,
    centerX: 0,
    centerY: 0,
    d: 0,
  });

  // 데이터 관리를 위한 코드
  const { data, isError } = useQuery<ProjectType[]>('project', () => getDbAllData<ProjectType>('project'));

  // 박스 관련 좌표를 구하기 위한 코드
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

  // 이벤트 관리
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
    <LoadingBox >
      <ReactLoading type='bubbles' color='#1876d1' height='10vh' width='10vw' />
      <p>잠시 후에 다시 시도해주세요.</p>
    </LoadingBox>
  )

  return (
    <ProjectBox id='project'>
      <Frame ref={rectRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={onMouseMove} >
        {data[0].project.map((el, index) => (
          <CardBox>
            {index === 1 ? <p className='text'>클릭하면 프로젝트를 자세히 볼 수 있어요!</p> : <p className='text'>&nbsp;</p>}

            <Card key={index} boxData={boxData}>
              <Light boxData={boxData} />
              <Image
                src={el.mainImage}
                alt='프로젝트 이미지'
                className='image'
                width={310}
                height={200}
              />
              <div className='header'>
                <h6>{el.nav.name}</h6>
                <p>{el.nav.type} project</p>
              </div>
              <div className='content'>
                <p>{el.nav.content}</p>
                <div>Stack</div>
                <p>{el.nav.stack}</p>
              </div>
            </Card>
          </CardBox>
        ))}
      </Frame>
    </ProjectBox>
  )
}

const LoadingBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  height: 400px;
  width: 100%;

  p {
    margin: 3rem;
    font-size: 1.2rem;
  }
`

const ProjectBox = styled.section`
  position: relative;
  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: linear-gradient(0deg, #ffffff 0%, #dfffd847 60%, #b5f1ccde 100%);
`

const Frame = styled.div`
  width: 99vw;
  height: 100vh;
  position: relative;

  transition: transform 200ms;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap-reverse;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .text {
    font-size: 0.9rem;
    margin: -1rem 0 36px 0;
    color: #747474;
  }
`

interface CardProps {
  boxData: {
    left: number;
    top: number;
    centerX: number;
    centerY: number;
    d: number;
  };
}
const Card = styled.div<CardProps>`
  width: 310px;
  height: 460px;
  margin: 0 3vw;
  position: relative;

  font-family: 'SUIT-Regular';
  cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'  width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>👀</text></svg>") 16 0, auto;


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

const Light = styled.div<CardProps>`
  position: absolute;
  z-index: -1;
  
  width: 100%;
  height: 100%;
  border-radius: 3%;

  background: ${({ boxData }) =>
    `radial-gradient(circle at ${boxData.left}px ${boxData.top}px, #00000010, #ffffff, #ffffff60)`};

`;

export default Project;


