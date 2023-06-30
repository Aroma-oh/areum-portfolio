import styled from '@emotion/styled';

const RADIUS = 54;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

interface ProgressProps {
  value: number
}
export const ProgressCircle = ({ value }: ProgressProps) => {

  return (
    <ProgressBox>
      <div className='progress-wrap'>
        <StyledProgress value={value}>
          <circle className='frame' cx={60} cy={60} r={RADIUS} strokeWidth="12" />
          <circle className='bar' cx={60} cy={60} r={RADIUS} strokeWidth="12" />
        </StyledProgress>
      </div>
    </ProgressBox>
  )
}

const ProgressBox = styled.div`
  .progress-wrap {
    position: relative;
    width: 120px;
    height: 120px;
  }
`

const StyledProgress = styled.svg<ProgressProps> `
  transform: rotate(-90deg);

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
