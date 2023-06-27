// react, hook, icon import 
import { useEffect } from 'react'
import { useScroll } from '@/hooks/useScroll';
import { useMoveToSection } from '@/hooks/useMoveToSection';
import { FiMenu } from 'react-icons/fi';
// mui import
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// emotion import 
import styled from '@emotion/styled';
// recoil
import { useRecoilValue, useRecoilState } from 'recoil'
import { isColorNavState, toggleState } from '@/recoil/atoms'
// constant data import 
import { MENU } from '@/constant/menu';

function Header() {
  const isColorNav = useRecoilValue(isColorNavState);
  const [toggle, setToggle] = useRecoilState(toggleState);

  // 스크롤에 따라 background color를 변경하는 훅
  useScroll();

  const { handleMove } = useMoveToSection();

  // MUI 컴포넌트 재사용 목적
  // MUI 컴포넌트에 sx 속성을 props로 전달
  const Menu = ({ sx }: { sx: {} }) => {
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

  const handleSelectMenu = (menu: string) => {
    handleMove(menu);
    setToggle(false);
  }

  const handleToggleMenu = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    const resizeHandler = () => setToggle(false);
    window.addEventListener('resize', resizeHandler)
  }, [])

  return (
    <AppBarBox id='Portfolio'
      sx={{
        backgroundColor: isColorNav || toggle ? 'white' : 'rgb(0, 0, 0, 0.08)',
        color: 'black',
        backdropFilter: 'blur(6px)',
      }}>
      <Toolbar
        sx={{
          justifyContent: 'space-between',
          margin: '0 24px',
        }}
      >
        <TypoBox
          variant="h6"
          onClick={() => { handleMove('Profile') }}>
          ☁️ Portfolio
        </TypoBox>
        <FiMenu
          className='menu-icon'
          onClick={handleToggleMenu}
        />
        <Menu
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        />
      </Toolbar>
      <Menu
        sx={{
          display: { xs: toggle ? 'flex' : 'none', md: 'none' },
          flexDirection: { xs: 'column', md: 'row' },
          pb: '18px',
        }} />
    </AppBarBox>
  );
}

const AppBarBox = styled(AppBar)`
  .menu-icon { 
    font-size: 1.5rem;
    padding: 4px;
    cursor: pointer;
    :hover {
      background-color: rgb(255,255,255, 0.2);
      border-radius: 6px;
    }
  }

  @media (min-width: 900px) {
    .menu-icon {
      display: none;
    }
  }
`

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

const TypoBox = styled(Typography)`
  font-weight: 700;
  letter-spacing: 0.3rem;
  cursor: pointer;

  @media (max-width: 900px) {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
`

export default Header;