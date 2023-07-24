// styled, react, next.js import 
import styled from '@emotion/styled';
import { memo } from 'react';
import Image from 'next/legacy/image';
// mui import
import MuiCarousel from 'react-material-ui-carousel';
// custom hook import
import { useMoveToSection } from '@/hooks/useMoveToSection';
// type import
import { ProjectList } from '@/types/project'
// 
import { Carousel } from '@/component/section/project/Carousel'

interface Props {
  project: ProjectList;
};

export const Detail = memo(({ project }: Props) => {
  const { handleMove } = useMoveToSection();

  return (
    <DetailBox
      id='detail'
      onClick={() => {
        handleMove('project');
      }}>
      <Carousel project={project} />
      <ContentBox>
        <div className='intro'>
          {project?.intro.map(({ title, content }, idx) => (
            <div key={idx}>
              <h5>{title}</h5>
              {content.map((paragraph, idx) => (
                <div key={`${idx} content`} className='content'>
                  <p>{paragraph}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <div className='info'>
          {project?.info.map(({ title, content }, idx) => (
            <div key={idx} className='info-box'>
              <h6>{title}</h6>
              <div className='info-text'>{content}</div>
            </div>
          ))}
        </div>
      </ContentBox>
    </DetailBox>
  );
});

const DetailBox = styled.section`
  width: 99vw;
  height: 100vh;
  font-family: 'SUIT-Regular';
  
  display: flex;
  justify-content: center;
  align-items: center;

`

const ContentBox = styled.div`
  width: 35vw;
  margin-left: 5rem;  

  h5 {
    margin: 2rem 0 0.8rem 0;
    font-size: 1.3rem;
    font-weight: 600;
    color: #000000c8;
    width: fit-content;

    background-image: linear-gradient(90deg, #95DAC1, #fffd7f);
    background-position: bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
  p, .info-text {
    color: #565656;
    line-height: 1.3rem;
    word-break: break-all;
  }
  .info {
    margin-top: 1.8rem;
  }
  h6 {
    font-size: 1rem;
    font-weight: 600;
    color: #000000c8;
    margin: 0.8rem 0;
    width: fit-content;

    background-image: linear-gradient(90deg, #95DAC1, #fffd7f5a);
    background-position: bottom;
    background-size: 100% 50%;
    background-repeat: no-repeat;
  }
`
