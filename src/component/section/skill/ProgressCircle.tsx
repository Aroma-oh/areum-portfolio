import styled from '@emotion/styled';

interface ProgressProps {
  name?: string;
  value: number;
  open?: boolean;
}

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export const ProgressCircle = ({ value, name, open }: ProgressProps) => {

  return (
    <ProgressBox>
      <div className='progress-wrap' >
        <StyledProgress value={value} name={name} open={open}>
          <circle className='frame' cx={60} cy={60} r={RADIUS} strokeWidth="12" />
          <circle className={`bar ${open ? 'animate' : ''}`} cx={60} cy={60} r={RADIUS} strokeWidth="12" />
        </StyledProgress>
        <strong className='text'>{name}</strong>
      </div>
    </ProgressBox>
  )
}

const ProgressBox = styled.div`
  position: relative;
  
  .progress-wrap {
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
    color: #3d3d3d;
    font-size: 18px;
    font-weight: 600;
    line-height: 120px;
    transform: rotate(90deg);
}
`

const StyledProgress = styled.svg<ProgressProps> `
  width: 120px;
  height: 120px;
  .frame {
    fill: white;
    stroke: #daecff;
  }
  .bar {
    fill: transparent;
    stroke: #1876d1;
    stroke-linecap: round;
    stroke-dashoffset: ${({ name, value }) => name ? CIRCUMFERENCE * (1 - value / 100) : CIRCUMFERENCE};
    stroke-dasharray: ${CIRCUMFERENCE};
    transition: 1.4s ease-in-out;
  }
  .animate {
    stroke-dashoffset: ${({ value }) => CIRCUMFERENCE * (1 - value / 100)};
  }
`
