import styled from '@emotion/styled';
import { ReactNode } from 'react';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ProgressProps {
  value: number
  children: ReactNode;
  className: string;
  text: string;
}
export const ProgressCircle = ({ value, className, text }: ProgressProps) => {

  return (
    <ProgressBox>
      <div className='progress-wrap'>
        <StyledProgress value={value} className={className} text={text}>
          <circle className='frame' cx={60} cy={60} r={RADIUS} strokeWidth="12" />
          <circle className='bar' cx={60} cy={60} r={RADIUS} strokeWidth="12" />
        </StyledProgress>
        <strong className='text'>{text}</strong>
      </div>
    </ProgressBox>
  )
}

const ProgressBox = styled.div`
  .progress-wrap {
    position: relative;
    width: 120px;
    height: 120px;
    transform: rotate(-90deg);
  }
  .text {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    text-align: center;
    color: #888;
    font-size: 16px;
    line-height: 120px;
    transform: rotate(90deg);
}
`

const StyledProgress = styled.svg<ProgressProps> `
  .frame {
    fill: transparent;
    stroke: #daecff;
  }

  .bar {
    fill: transparent;
    stroke: #1876d1;
    stroke-linecap: round;
    stroke-dashoffset: ${(props) => CIRCUMFERENCE * (1 - props.value / 100)};
    stroke-dasharray: ${CIRCUMFERENCE};
    animation: progressAnimation 0.5s forwards;

    @keyframes progressAnimation {
    from {
      stroke-dashoffset: ${CIRCUMFERENCE};
    }
    to {
      stroke-dashoffset: ${({ value }) => CIRCUMFERENCE * (1 - value / 100)};
    }
  }
  }
`
