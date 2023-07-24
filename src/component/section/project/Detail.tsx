// styled, react, next.js import 
import styled from '@emotion/styled';
import { memo } from 'react';
// custom hook import
import { useMoveToSection } from '@/hooks/useMoveToSection';
// type import
import { ProjectList } from '@/types/project';
// component import 
import { Carousel } from '@/component/section/project/Carousel'
import { Content } from '@/component/section/project/Content'

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
      <Content project={project} />
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
