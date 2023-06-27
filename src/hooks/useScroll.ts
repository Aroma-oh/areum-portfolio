import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { isColorNavState, toggleState } from "@/recoil/atoms"


export const useScroll = () => {
  const setIsColorNav = useSetRecoilState(isColorNavState);
  const setToggle = useSetRecoilState(toggleState);

  const onScroll = () => {
    const scrollY = window.scrollY;
    setToggle(false)

    if (scrollY > 486) {
      return setIsColorNav(true);
    }

    setIsColorNav(false);

  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [])
}