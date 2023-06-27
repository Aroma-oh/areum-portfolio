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
// hook
import { useScroll } from '@/hooks/useScroll';

const menu = ['Profile', 'Skills', 'Projects', 'Contact'];

function Header() {
  const setSelectMenu = useSetRecoilState(selectMenuState);
  const isColorNav = useRecoilValue(isColorNavState);
  const { handleMove } = useScroll();

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

  const handleSelectMenu = (menu: string) => {
    setSelectMenu(menu);
    handleMove(menu)
  }

  return (
    <ThemeProvider theme={theme}>
      <AppBarBox >
        <ToolBarBox >
          <TypoBox variant="h6">
            Portfolio
          </TypoBox>
          <StyledMenuBox className="menu-box"  >
            {menu.map((el) => (
              <Button
                className="menu-button"
                key={el}
                onClick={() => handleSelectMenu(el)}
              >
                {el}
              </Button>
            ))}
          </StyledMenuBox>
        </ToolBarBox>
      </AppBarBox>
    </ThemeProvider>
  );
}

const AppBarBox = styled(AppBar)`
  color: rgba(0, 0, 0);
`

const ToolBarBox = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
  margin: 0 24px 0 24px;
`

const StyledMenuBox = styled(Box)`
  display: none;

  .menu-button {
    color: inherit;
    margin-top: 2px;
  }

  @media (min-width: 900px) {
    display: flex;
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