// react, hook, icon import 
import { useState } from 'react'
import { useScroll } from '@/hooks/useScroll';
import { FiMenu } from 'react-icons/fi';
// mui import
import { createTheme, ThemeProvider } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// emotion import 
import styled from '@emotion/styled';
// recoil
import { useSetRecoilState, useRecoilValue } from 'recoil'
import { isColorNavState, selectMenuState } from '@/recoil/atoms'

const menu = ['Profile', 'Skills', 'Projects', 'Contact'];

function Header() {
  const setSelectMenu = useSetRecoilState(selectMenuState);
  const isColorNav = useRecoilValue(isColorNavState);
  const { handleMove } = useScroll();
  const [toggle, setToggle] = useState(false)

  const theme = createTheme({
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: {
            backgroundColor: isColorNav ? '#ffd000' : 'aqua',
          },
        },
      },
    },
  });

  const Menu = ({ sx }: { sx?: any }) => {
    return (
      <MenuBox className="menu-box" sx={sx}>
        {menu.map((el) => (
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
    setSelectMenu(menu);
    handleMove(menu);
    setToggle(!toggle);
  }

  const handleToggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBarBox >
        <ToolBarBox >
          <TypoBox variant="h6">
            Portfolio
          </TypoBox>
          <FiMenu
            className='menu-icon'
            onClick={() => handleToggleMenu()}
          />
          <Menu
            sx={{ display: { xs: 'none', md: 'flex' } }}
          />
        </ToolBarBox>
        <Menu
          sx={{
            display: { xs: toggle ? 'flex' : 'none', md: 'none' },
            flexDirection: { xs: 'column', md: 'row' },
          }} />
      </AppBarBox>
    </ThemeProvider>
  );
}

const AppBarBox = styled(AppBar)`
  color: rgba(0, 0, 0);

  .menu-icon { 
    font-size: 1.5rem;
    cursor: pointer;
  }

  @media (min-width: 900px) {
    .menu-icon {
      display: none;
    }
  }
`

const ToolBarBox = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  margin: 0 24px 0 24px;
`

const MenuBox = styled(Box)`
  .menu-button {
    color: inherit;
    margin-top: 2px;
  }
`;

const TypoBox = styled(Typography)`
  margin-right: 2px;
  font-weight: 700;
  letter-spacing: 0.3rem;
  color: inherit;
  text-decoration: none;

  @media (max-width: 900px) {
    display: flex;
    flex-grow: 1;
    justify-content: center;
  }
`

export default Header;