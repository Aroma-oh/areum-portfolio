// react, styled import 
import { useState } from 'react'
import styled from '@emotion/styled';
// recoil import
import { useRecoilValue } from 'recoil';
import { isHorizontalState } from '@/recoil/atoms';
// component import 
import { ViewMode } from '@/component/section/project/ViewMode';
import { NavButton } from '@/component/section/project/NavButton';
import { Carouser } from '@/component/section/project/Carouser';
import { Content } from '@/component/section/project/Content';



const Project = () => {
  const isHorizon = useRecoilValue(isHorizontalState);

  return (
    <ProjectBox id='Project'>
      <h4>Project</h4>
      <div className='view-mode'>
        <ViewMode />
      </div>
      {isHorizon === true ? <NavButton /> : null}
      <TextBox isHorizon={isHorizon}>
        <Carouser />
        <Content />
      </TextBox>


      {/* 
      <div className='개발계획'>
        <div>데이터는 여기서 받아서 밑으로 prop, 하위 컴포넌트는 보여주는 역할만 </div>
        <div> 🆗 가로 세로 토글: 상태 아톰으로: select https://mui.com/material-ui/react-select/#basic-select</div>

        <div> 🆗 가로모드일때만 보이기</div>
        <div> 🆗 네비: 선택 프로젝트 인덱스를 아톰으로: toggle button https://mui.com/material-ui/react-toggle-button/</div>

        <div> 가로/세로 모드에 따라 flex-direction 다르게 주기</div>
        <div className='content-box'>
          <div>캐러셀 : Stepper https://mui.com/material-ui/react-stepper/#text-with-carousel-effect</div>
          <div>content box</div>
        </div>
      </div> */}


    </ProjectBox>
  )
}

const ProjectBox = styled.section`
  position: relative;
  height: fit-content; 
  padding: 2.5% 2.5% 2.5% 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h4 {
    margin-bottom: 3rem;
    align-self: center;
    font-size: 2rem;
    font-weight: 500;
  }
  .view-mode {
    /* padding-left: 70vw; */
    margin-bottom: 1rem;
  }
`
interface TextBoxProps {
  isHorizon: boolean;
}
const TextBox = styled.div<TextBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`

export default Project;