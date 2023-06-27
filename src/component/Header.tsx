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
import { useRecoilValue } from 'recoil'
import { isColorNavState } from '@/recoil/atoms'

const pages = ['Portfolio', 'Skills', 'Projects', 'Contact'];

function Header() {

  const isColorNav = useRecoilValue(isColorNavState);

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

  return (
    <ThemeProvider theme={theme}>
      <AppBarBox >
        <ToolBarBox >
          <TypoBox variant="h6">
            Portfolio
          </TypoBox>
          <StyledMenuBox className="menu-box"  >
            {pages.map((page) => (
              <Button
                className="menu-button"
                key={page}
              >
                {page}
              </Button>
            ))}
          </StyledMenuBox>
        </ToolBarBox>
      </AppBarBox>
    </ThemeProvider>
  );
}

const AppBarBox = styled(AppBar)`
  /* background-color: rgba(0, 0, 0, 0); */
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