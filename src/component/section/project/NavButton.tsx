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
import { ProjectList } from '@/types/project'

interface Props {
  project: ProjectList[] | undefined;
};

export const NavButton = ({ project }: Props) => {

  const [selectProjectIndex, setSelectProjectIndex] = useRecoilState(selectProject);
  const { handleMove } = useMoveToSection();

  const handleClick = (projectIndex: number,) => {
    setSelectProjectIndex(projectIndex);
    handleMove('view-project');
  };

  return (
    <NavButtonBox
      color="primary"
      value={selectProjectIndex}
      aria-label="Platform"
    >
      {project?.map(({ nav }, idx) => (
        <ToggleButton
          onClick={() => handleClick(idx)}
          key={idx}
          value={idx}
          sx={{
            width: '20vw', height: '120px',
            borderRadius: '8px'
          }}
        >
          {
            <div>
              <div>{nav.type}</div>
              <div className='name'>{nav.name}</div>
              <div>- {nav.create} -</div>
            </div>
          }
        </ToggleButton>
      ))}
    </NavButtonBox>
  )
};

const NavButtonBox = styled(ToggleButtonGroup)`
  width: 60vw;
  padding-bottom: 2.5%;
  .name {
    font-size: 1.4rem;
  }
  @media(max-width: 750px) {
    .name {
      font-size: 1.2rem;
    }
  }
`

