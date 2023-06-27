import { useEffect, useRef } from 'react';
import { useSetRecoilState } from 'recoil';

import { isColorNavState } from "@/recoil/atoms"


export const useScroll = () => {
  const setIsColorNav = useSetRecoilState(isColorNavState)

  const sectionRef = useRef<HTMLElement>(null);

  const onScroll = () => {
    let targetTop = sectionRef.current?.getBoundingClientRect().y

    if (targetTop && targetTop < 60) setIsColorNav(true)
    else setIsColorNav(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleMove = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return { sectionRef, handleMove }
}