// styled, react, hook import
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useMoveToSection } from '@/hooks/useMoveToSection';
// framer import
import { motion, useMotionValue } from 'framer-motion';
// component import
import { Mountain } from '@/component/section/intro/Mountain';
import { Button } from '@/component/common/Button';


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
        <div className='button-box'>
          <Button onClick={() => handleMove('about')} />
        </div>
      </ContentBox>
      <Mountain />
    </IntroBox>
  )
}

const IntroBox = styled.section`
  font-family: 'PyeongChangPeace-Bold';
  font-size: 150px;
  font-weight: 900;
  letter-spacing: 0.8rem;
`

const ContentBox = styled.div`
  z-index: 1;
  width: 100%;
  height: calc(100vh - 84px);
  position: absolute;

  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;

  cursor: default;

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
  .button-box {
    position: absolute;
    top: 78vh;
  }
`

export default Intro;