// styled import 
import styled from '@emotion/styled';
import { MdArrowForwardIos } from 'react-icons/md';

interface Props {
  onClick: () => void;
  rotate?: number;
  className?: string;
}
export const SubButton = ({ rotate, onClick }: Props) => {

  return (
    <SubButtonBox rotate={rotate} onClick={onClick}>
      <MdArrowForwardIos className='icon' />
    </SubButtonBox>)
};

const SubButtonBox = styled.div<Props>`
  width: 50px;
  height: 50px;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    position: absolute;
    background: rgba(0, 0, 0, 0.1);
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
    transform: scale(1.5);
    opacity: 0
  }
}

  .icon {
    z-index: 1;
    font-size: 2rem;
    color: white;
    position: absolute;
    rotate: ${({ rotate }) => rotate ? `${rotate}deg` : `90deg`};
  }

  @keyframes moveAndFade {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0.5;
    }
  }
`