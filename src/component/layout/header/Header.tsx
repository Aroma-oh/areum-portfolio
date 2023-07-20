// styled import 
import styled from '@emotion/styled';
// react, custom hook, icon import 
import { useEffect, useRef } from 'react'
import { useScroll } from '@/hooks/useScroll';
import { useMoveToSection } from '@/hooks/useMoveToSection';
import { FiMenu } from 'react-icons/fi';
// mui import
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// recoil import
import { useRecoilValue, useRecoilState } from 'recoil'
import { isColorNavState, toggleState, headerHeightState } from '@/recoil/atoms'
// component import
import { Menu } from '@/component/layout/header/Menu'

function Header() {
  const isColorNav = useRecoilValue(isColorNavState);
  const [, setHeaderHeight] = useRecoilState(headerHeightState);
  const [toggle, setToggle] = useRecoilState(toggleState);

  const handleToggleMenu = () => {
    setToggle(!toggle)
  }

  useEffect(() => {
    const resizeHandler = () => setToggle(false);
    window.addEventListener('resize', resizeHandler);
  }, [])


  // 스크롤에 따라 background color를 변경하는 훅
  useScroll();

  // 선택 섹션으로 스크롤 이동하는 훅
  const { handleMove } = useMoveToSection();

  // 헤더 높이 저장 
  const headerRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight as number;
    setHeaderHeight(headerHeight)
  }, [])


  return (
    <AppBarBox
      id='Header'
      ref={headerRef}
      sx={{
        height: '80px',
        justifyContent: 'center',
        backgroundColor: isColorNav || toggle ? 'white' : 'rgb(255, 255, 255, 0.08)',
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
          onClick={() => { handleMove('Intro') }}>
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