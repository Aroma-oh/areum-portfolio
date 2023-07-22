// styled import
import styled from '@emotion/styled';
import { useState, useEffect, MouseEvent, useRef } from 'react';

export const EffectBox = () => {
  const [isMouseEnter, setIseMouseEnter] = useState(false);
  const [boxData, setBoxData] = useState({
    left: 0,
    top: 0,
    centerX: 0,
    centerY: 0,
    d: 0,
  })

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

  return (
    <Frame ref={rectRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={onMouseMove}>
      <Box boxData={boxData}>
        <Light boxData={boxData} />
      </Box>
    </Frame>
  )
};

const Frame = styled.div`
  width: 550px;
  height: 550px;
  transition: transform 200ms;

  &:hover {
    transform: scale3d(1.05, 1.05, 1.05);
  }
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
  width: 100%;
  height: 100%;
  position: relative;

  border-radius: 9px;
  background-color: white;
  box-shadow: ${({ boxData }) => `${-boxData.centerX / 15}px ${-boxData.centerY / 15}px 10px 2px rgba(0, 0, 0, 0.08)`};

  transform: ${({ boxData }) =>
    `rotate3d(${-boxData.centerY / 100}, ${boxData.centerX / 100},0, ${-boxData.d / 15}deg)`};
  
  transition-duration: 250ms;
  transition-property: transform, box-shadow;
  transition-timing-function: ease-out;
  `;

const Light = styled.div<BoxProps>`
  position: absolute;
  
  width: 100%;
  height: 100%;
  border-radius: 9px;

  background: ${({ boxData }) =>
    `radial-gradient(circle at ${boxData.left}px ${boxData.top}px, #00000010, #ffffff, #ffffff60)`};

`;