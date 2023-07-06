// styled, hook import 
import styled from '@emotion/styled';
import { useMoveToSection } from '@/hooks/useMoveToSection';
// recoil import
import { useRecoilState } from 'recoil'
import { toggleState } from '@/recoil/atoms'
// mui import
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { SxProps } from '@mui/system';
// constant data import 
import { MENU } from '@/constants/menu';


export const Menu = ({ sx }: { sx: SxProps }) => {
  const [, setToggle] = useRecoilState(toggleState);
  const { handleMove } = useMoveToSection();

  const handleSelectMenu = (menu: string) => {
    handleMove(menu);
    setToggle(false);
  }

  return (
    <MenuBox className="menu-box" sx={sx}>
      {MENU.map((el) => (
        <Button
          className="menu-button"
          key={el}
          onClick={() => handleSelectMenu(el)}
        >
          {el}
        </Button>
      ))}
    </MenuBox>
  )
}

const MenuBox = styled(Box)`
  .menu-button {
    color: inherit;
    margin-top: 2px;
  }
  @media (min-width: 900px) {
    .menu-button {
      :hover {
      background-color: rgb(255,255,255, 0.2);
      border-radius: 6px;
    }
  }
}
`;