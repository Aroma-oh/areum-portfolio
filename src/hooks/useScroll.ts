import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { isColorNavState } from "@/recoil/atoms"


export const useScroll = () => {
  const setIsColorNav = useSetRecoilState(isColorNavState)

  const onScroll = () => {
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollY > 486) setIsColorNav(true)
    else setIsColorNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const sectionRef = useRef<HTMLElement>(null);

  const handleMove = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return { sectionRef, handleMove }
}