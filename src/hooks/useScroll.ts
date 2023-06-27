import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { isColorNavState } from "@/recoil/atoms"


export const useScroll = () => {
  const setIsColorNav = useSetRecoilState(isColorNavState)

  const onScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY > 486) {
      return setIsColorNav(true)
    }

    setIsColorNav(false)

  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [])
}