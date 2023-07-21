// styled, hook import
import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';
// component import
import { Mountain } from '@/component/section/intro/Mountain';
import { Button } from '@/component/common/Button';

import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

const Intro = () => {
  const { handleMove } = useMoveToSection();

  const containerY = useMotionValue(0);
  const menuMaskY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const yValue = e.clientY - (window.innerHeight * 0.35);
      containerY.set(yValue);
      menuMaskY.set(-yValue);
    };

    document.body.addEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <IntroBox id='Intro' >
      <ContentBox>
        <div className='header-box'>
          <ul className='header'>
            <li>Frontend</li>
            <li>portfolio</li>
          </ul>
          <motion.div
            className='container'
            style={{ y: containerY }}
          >
            <motion.ul
              className='menu-mask'
              style={{ y: menuMaskY }}
            >
              <li>Frontend</li>
              <li>portfolio</li>
            </motion.ul>
          </motion.div>
        </div>
        <Button onClick={() => handleMove('about')} />
      </ContentBox>
      <Mountain />
    </IntroBox>
  )
}

const IntroBox = styled.section`

  @font-face {
    font-family: 'PyeongChangPeace-Bold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-02@1.0/PyeongChangPeace-Bold.woff2') format('woff2');
    font-weight: 700;
    font-style: normal;
  }

  font-family: 'PyeongChangPeace-Bold';
  font-size: 150px;
  font-weight: 900;
  letter-spacing: 0.8rem;

  @media ((min-width: 600px) and (max-width: 900px)) {
    font-size: 100px;
  }
  @media (max-width: 600px) {
    font-size: 60px;
  }
`

const ContentBox = styled.div`
  z-index: 1;
  width: 100%;
  height: 83vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;

  .header {
    color: transparent;
    -webkit-text-stroke: 2px black;
  } 

  .container {
    height: 100px;
    overflow: hidden;
    position: absolute;
    top: 0;
    color: #FFFEC4;
    -webkit-text-stroke: 2px black;
  }

  .header-box {
    position: absolute;
    list-style: none;
    white-space: nowrap;
  }

  li {
    margin-top: 1.2rem;
  }
`

export default Intro;