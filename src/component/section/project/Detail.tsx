// styled, react import 
import styled from '@emotion/styled';
import { memo } from 'react';
// custom hook import
import { useMoveToSection } from '@/hooks/useMoveToSection';
// type import
import { ProjectList } from '@/types/project';
// component import 
import { Carousel } from '@/component/section/project/Carousel';
import { Content } from '@/component/section/project/Content';
import { SubButton } from '@/component/common/SubButton';


interface Props {
  project: ProjectList;
  className: string;
  handleDetailClose: () => void;
};

export const Detail = memo(({ project, className, handleDetailClose }: Props) => {
  const { handleMove } = useMoveToSection();

  return (
    <DetailBox id='detail' className={className} >
      <div className='content'>
        <Carousel project={project} />
        <Content project={project} />
      </div>
      <SubButton onClick={() => {
        handleMove('project');
        handleDetailClose();
      }} />
    </DetailBox>
  );
});

const DetailBox = styled.section`
  padding-top: 84px;
  width: 99vw;
  height: ${({ className }) => (className === 'open' ? 'calc(100vh - 84px)' : '0px')};
  visibility: ${({ className }) => (className === 'open' ? 'visible' : 'hidden')};
  transition: height 2s ease-in;

  font-family: 'SUIT-Regular';

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
