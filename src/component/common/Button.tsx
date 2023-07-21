import styled from '@emotion/styled';
import { TbArrowBigDownLinesFilled } from 'react-icons/tb';

interface Props {
  onClick: () => void;
}
export const Button = ({ onClick }: Props) => {
  return (
    <ButtonBox onClick={onClick}>
      <Circle />
      <Arrow />
    </ButtonBox>
  )
}

const ButtonBox = styled.div`
  position: absolute;
  top: 78vh;
  
  width: 100px;
  height: 100px;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
`

const Arrow = styled(TbArrowBigDownLinesFilled)`
  z-index: 100;
  font-size: 20px;
  color: #ffffff;
`

const Circle = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;

  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50%;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: #ffffff6b;
    width: 50px;
    height: 50px;
    margin: auto;
    border-radius: 50%;
    animation: waveAnimation 3s infinite linear;
  }
  &:after {
    opacity: 1;
    animation: waveAnimation 3s 1.5s infinite linear;
  }

@keyframes waveAnimation {
  0% {
    transform: scale(0);
    opacity: 1
  }
  100% {
    transform: scale(3);
    opacity: 0
  }
}
`