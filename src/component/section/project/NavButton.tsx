// react, hook import
import { MouseEvent } from 'react'
import { useMoveToSection } from '@/hooks/useMoveToSection';
// styled import
import styled from '@emotion/styled';
// recoil import
import { useRecoilState } from 'recoil';
import { selectProject } from '@/recoil/atoms';
// mui import
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// data type import
import { ProjectNav } from '@/types/project'

interface Props {
  navData: ProjectNav[];
}

export const NavButton = ({ navData }: Props) => {

  const [selectProjectIndex, setSelectProjectIndex] = useRecoilState(selectProject);
  const { handleMove } = useMoveToSection();

  const handleClick = (event: MouseEvent<HTMLElement>, projectIndex: number,) => {
    setSelectProjectIndex(projectIndex);
    handleMove('view-project');
  };

  return (
    <NavButtonBox
      color="primary"
      value={selectProjectIndex}
      aria-label="Platform"
    >
      {navData.map(({ type, name, create }, idx) => (
        <ToggleButton
          onClick={(event) => handleClick(event, idx)}
          key={idx}
          value={idx}
          sx={{
            width: '400px', height: '120px',
            borderRadius: '8px'
          }}
        >
          {
            <div>
              <div>{type}</div>
              <div className='name'>{name}</div>
              <div>- {create} -</div>
            </div>
          }
        </ToggleButton>
      ))}
    </NavButtonBox>
  )
};

const NavButtonBox = styled(ToggleButtonGroup)`
  width: 50vw;
  padding-bottom: 2.5%;
  .name {
    font-size: 1.4rem;
  }
`

