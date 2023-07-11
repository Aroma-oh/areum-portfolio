import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Banner = () => {
  const [width, setWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const containerWidth = (containerRef.current as HTMLDivElement).offsetWidth;
    setWidth(containerWidth);
  }, []);

  return (
    <BannerBox className='container' ref={containerRef}>
      <AnimatePresence initial={false} >
        <motion.div
          className='text'
          initial={{ x: width }}
          animate={{ x: -width }}
          exit={{ x: width }}
          transition={{
            x: {
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }
          }}
        >
          frontend • portfolio • areum oh
        </motion.div>
      </AnimatePresence>
    </BannerBox>
  )
}

const BannerBox = styled.div`
  width: fit-content;
  height: 20px;
  background-color: aquamarine;
`
